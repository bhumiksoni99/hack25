import styled from "styled-components"

const SidebarContainer = styled.aside`
  width: 240px;
  background: white;
  border-right: 1px solid #eaeaea;
  height: 100vh;
  padding: 20px;
`

const ProjectList = styled.div`
  margin-top: 20px;
`

const ProjectItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  cursor: pointer;
  
  &:hover {
    background: #f5f5f5;
  }
`

const StatusDot = styled.span<{ color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) => props.color};
  margin-left: auto;
`

const NewPrediction = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 14px;
  color: #666;
  
  &:hover {
    background: #f5f5f5;
  }
`

export default function Sidebar() {
  return (
    <SidebarContainer>
      <NewPrediction>+ New Prediction</NewPrediction>

      <ProjectList>
        <h3>Recent Mandates</h3>
        <ProjectItem>
          Lodha Palava
          <StatusDot color="#ffd700" />
        </ProjectItem>
        <ProjectItem>
          Brigade Garden
          <StatusDot color="#4CAF50" />
        </ProjectItem>
        <ProjectItem>
          Casagrand
          <StatusDot color="#4CAF50" />
        </ProjectItem>
        <ProjectItem>
          Godrej Garden City
          <StatusDot color="#f44336" />
        </ProjectItem>
      </ProjectList>
    </SidebarContainer>
  )
}

