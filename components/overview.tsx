import styled from "styled-components"

const Container = styled.div`
  padding: 24px;
`

const Section = styled.div`
  margin-bottom: 32px;
`

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 16px;
`

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 32px;
`

const MetricCard = styled.div`
  background: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`

const MetricLabel = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
`

const MetricValue = styled.div`
  font-size: 14px;
  color: #333;
  font-weight: 500;
`

const ProsCons = styled.div`
  background: #f8f9fa;
  padding: 24px;
  border-radius: 8px;
`

const ListItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 12px;
  font-size: 14px;
  color: #333;
`

export default function Overview() {
  return (
    <Container>
      <Section>
        <SectionTitle>Basic Metrics</SectionTitle>
        <MetricsGrid>
          <MetricCard>
            <MetricLabel>Profitability Forecast</MetricLabel>
            <MetricValue>Moderate Probability of Profitability (60%)</MetricValue>
          </MetricCard>
          <MetricCard>
            <MetricLabel>Risk Level</MetricLabel>
            <MetricValue>Medium</MetricValue>
          </MetricCard>
          <MetricCard>
            <MetricLabel>Market Demand</MetricLabel>
            <MetricValue>Stable with slight upward trend</MetricValue>
          </MetricCard>
        </MetricsGrid>
      </Section>

      <Section>
        <SectionTitle>Pros</SectionTitle>
        <ProsCons>
          <ListItem>✓ Location Demand Stability - Mulund is a growing micro-market</ListItem>
          <ListItem>✓ Pricing Competitiveness - At ₹1.5 Cr - ₹2.8 Cr</ListItem>
          <ListItem>✓ Festive Demand Surge - Since it's post-Diwali</ListItem>
        </ProsCons>
      </Section>
    </Container>
  )
}

