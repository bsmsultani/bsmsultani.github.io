#!/usr/bin/env python3
import json
import os
import sys
import re
from pathlib import Path

def convert_notebook_to_html(notebook_path, output_path=None):
    """
    Convert a Jupyter notebook to HTML without using nbconvert templates.
    
    Args:
        notebook_path: Path to the .ipynb file
        output_path: Path to save the HTML file (optional)
    """
    # Read the notebook
    with open(notebook_path, 'r', encoding='utf-8') as f:
        notebook = json.load(f)
    
    # Generate HTML
    html = """<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jupyter Notebook Export</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
        }
        .cell {
            margin-bottom: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow: hidden;
        }
        .input {
            background-color: #f8f9fa;
            padding: 10px;
            border-bottom: 1px solid #ddd;
        }
        .output {
            padding: 10px;
        }
        pre {
            background-color: #f8f9fa;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 15px;
            overflow-x: auto;
            margin: 0;
        }
        code {
            font-family: 'Courier New', Courier, monospace;
            color: #2980b9;
        }
        img {
            max-width: 100%;
            height: auto;
        }
        table {
            border-collapse: collapse;
            width: 100%;
            margin-bottom: 20px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>Jupyter Notebook Export</h1>
"""
    
    # Process each cell
    for cell in notebook['cells']:
        cell_type = cell['cell_type']
        
        if cell_type == 'markdown':
            # Convert markdown to HTML (simple conversion)
            content = cell['source']
            if isinstance(content, list):
                content = ''.join(content)
            
            # Basic markdown conversion
            content = re.sub(r'# (.*)', r'<h1>\1</h1>', content)
            content = re.sub(r'## (.*)', r'<h2>\1</h2>', content)
            content = re.sub(r'### (.*)', r'<h3>\1</h3>', content)
            content = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', content)
            content = re.sub(r'\*(.*?)\*', r'<em>\1</em>', content)
            content = re.sub(r'`(.*?)`', r'<code>\1</code>', content)
            content = re.sub(r'```(.*?)```', r'<pre><code>\1</code></pre>', content, flags=re.DOTALL)
            content = re.sub(r'\n\n', r'</p><p>', content)
            
            html += f'<div class="cell markdown"><p>{content}</p></div>\n'
        
        elif cell_type == 'code':
            # Code cell
            code = cell['source']
            if isinstance(code, list):
                code = ''.join(code)
            
            html += f'<div class="cell"><div class="input"><pre><code>{code}</code></pre></div>\n'
            
            # Output
            if 'outputs' in cell and cell['outputs']:
                html += '<div class="output">\n'
                for output in cell['outputs']:
                    if 'text' in output:
                        text = output['text']
                        if isinstance(text, list):
                            text = ''.join(text)
                        html += f'<pre>{text}</pre>\n'
                    elif 'data' in output:
                        if 'text/html' in output['data']:
                            html += ''.join(output['data']['text/html'])
                        elif 'text/plain' in output['data']:
                            html += f'<pre>{''.join(output["data"]["text/plain"])}</pre>\n'
                        elif 'image/png' in output['data']:
                            # Handle base64 images
                            img_data = output['data']['image/png']
                            html += f'<img src="data:image/png;base64,{img_data}" alt="Output image">\n'
                html += '</div>\n'
            
            html += '</div>\n'
    
    html += """
</body>
</html>
"""
    
    # Write the HTML file
    if output_path is None:
        output_path = os.path.splitext(notebook_path)[0] + '.html'
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)
    
    print(f"Notebook exported to {output_path}")
    return output_path

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python export_notebook.py <notebook_path> [output_path]")
        sys.exit(1)
    
    notebook_path = sys.argv[1]
    output_path = sys.argv[2] if len(sys.argv) > 2 else None
    
    convert_notebook_to_html(notebook_path, output_path) 