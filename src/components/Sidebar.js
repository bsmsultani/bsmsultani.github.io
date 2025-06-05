import styled from "styled-components";

const Sidebar = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 24px 16px;
    background: transparent;
    border-bottom: 1px solid rgba(219, 226, 255, 0.5);
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

const SidebarTitle = styled.h3`
    font-size: 1.18rem;
    font-weight: 600;
    margin-bottom: 18px;
    color: #3a3a4a;
    letter-spacing: 0.5px;
`;

const SearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
    margin-left: auto;
    padding: 0;
    max-width: 600px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 12px;
    padding: 8px;
    backdrop-filter: blur(4px);
`;

const FilterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
`;

const TagCheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: ${props => props.selected ? 'rgba(219, 226, 255, 0.6)' : 'rgba(249, 249, 249, 0.4)'};
    border: 1px solid rgba(191, 200, 230, 0.4);
    border-radius: 8px;
    padding: 6px 10px;
    font-size: 0.95rem;
    font-weight: 500;
    transition: all 0.2s ease;
    backdrop-filter: blur(2px);
    
    &:hover {
        background-color: ${props => props.selected ? 'rgba(219, 226, 255, 0.7)' : 'rgba(249, 249, 249, 0.6)'};
    }
`;

const SearchProjectsField = styled.input`
    width: 100%;
    border: none;
    font-size: 16px;
    height: 35px;
    padding: 6px;
    background: transparent;
    &:focus {
        outline: none;
    }
`;

const SearchButton = styled.input`
    font-size: 16px;
    height: 35px;
    border: none;
    padding: 6px 12px;
    width: auto;
    color: #3a3a4a;
    background: rgba(219, 226, 255, 0.4);
    border-radius: 6px;
    transition: all 0.2s ease;
    
    &:hover {
        cursor: pointer;
        background: rgba(219, 226, 255, 0.6);
    }
    
    &:active {
        opacity: 0.8;
        transform: scale(0.98);
    }
`;

const SidebarComponent = ({ searchTerm, setSearchTerm, selectedTags, handleTagToggle, tagFrequency }) => (
    <Sidebar>
        <SidebarTitle>Search & Filter</SidebarTitle>
        <SearchWrapper>
            <SearchProjectsField 
                type="text" 
                placeholder="search projects"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchButton type="button" value="Search" />
        </SearchWrapper>
        <SidebarTitle style={{fontSize: '1.05rem', marginBottom: '10px'}}>Tags</SidebarTitle>
        <FilterWrapper>
            {Object.entries(tagFrequency)
                .sort(([, countA], [, countB]) => countB - countA)
                .slice(0, 15)
                .map(([tag, count]) => (
                    <TagCheckboxWrapper key={tag} selected={selectedTags.includes(tag)}>
                        <input 
                            style={{marginRight: "8px"}}
                            type="checkbox" 
                            checked={selectedTags.includes(tag)}
                            onChange={() => handleTagToggle(tag)}
                        />
                        <span>{tag} {count}</span>
                    </TagCheckboxWrapper>
                ))}
        </FilterWrapper>
    </Sidebar>
);

export default SidebarComponent;