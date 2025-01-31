"use client";
import Image from "@/node_modules/next/image";
import { useState } from "react";
import styled from "styled-components";
import { cons, finalReco, pros } from "../public/data";

const Container = styled.div`
  padding: 24px;
  background: white;
  margin: 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: #333;
`;

const UploadSection = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`;

const UploadButton = styled.input`
  background: #6161ff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;

const ManualButton = styled.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
`;

const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;

const DetailItem = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 4px;
`;

const Value = styled.div`
  font-size: 14px;
  color: #333;
`;

export default function MandateDetails() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<"yes" | "no" | "average">(() => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log("asas", randomNumber);
    if (randomNumber == 1) return "yes";
    else if (randomNumber == 2) return "no";
    else return "average";
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setLoading(true);
    if (file) {
      setTimeout(() => {
        setFileName(file.name);
        setLoading(false);
      }, 2000);
    }
  };

  const LoadingOverlay = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <div className="animate-spin h-12 w-12 border-4 border-white border-t-transparent rounded-full"></div>
        {/* <p className="mt-4 text-white text-lg">Loading...</p> */}
        <Image src="/loading.png" width={1000} height={1000} />
      </div>
    </div>
  );

  const renderItem = (title: string, body: string) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <p style={{ color: "#9FA6B0", fontSize: 12 }}>{title}</p>
        <p style={{ fontSize: 14 }}>{body}</p>
      </div>
    );
  };

  console.log("das", result);

  return (
    <div style={{ padding: "40px" }}>
      {loading && <LoadingOverlay />}
      <Container>
        <Header>
          <Title>Mandate Details</Title>
        </Header>
        <UploadSection>
          <div className="flex flex-col items-center gap-4">
            {/* Hidden File Input */}
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleFileChange}
            />

            <label
              htmlFor="fileInput"
              style={{ background: "#6161ff" }}
              className="cursor-pointer text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Choose File
            </label>

            {/* Display Selected File Name */}
          </div>
          <ManualButton>Fill manually</ManualButton>
        </UploadSection>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            gap: 4,
            flex: 1,
            width: "100%",
            marginBottom: 24,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ color: "#6b7785" }}>Mandate Brochure Document</p>
            <div
              style={{
                borderWidth: 1,
                borderColor: "#e7e7e7",
                padding: 12,
                minHeight: 50,
              }}
            >
              {fileName ? (
                <>
                  <p>{fileName && fileName.slice(0, 20)}</p>
                  <p style={{ color: "#0e9a56", fontSize: 12 }}>
                    Successfully Uploaded
                  </p>
                </>
              ) : (
                <button style={{ color: "#6161ff" }}>Upload Brochure</button>
              )}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ color: "#6b7785" }}>Projected Start Date</p>
            <div
              style={{
                borderWidth: 1,
                borderColor: "#e7e7e7",
                padding: 12,
                minHeight: 50,
              }}
            >
              <input type="date" />
            </div>
          </div>
        </div>
        {/* <DetailGrid>
        <DetailItem>
          <Label>Project Name</Label>
          <Value>Raheja Classic</Value>
        </DetailItem>
        <DetailItem>
          <Label>City</Label>
          <Value>Mumbai</Value>
        </DetailItem>
        <DetailItem>
          <Label>Locality</Label>
          <Value>Bandra</Value>
        </DetailItem>
        <DetailItem>
          <Label>Address</Label>
          <Value>Sector 3, Bandra West, MH 121212</Value>
        </DetailItem>
      </DetailGrid> */}
        {!loading && fileName && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderWidth: 2,
              borderColor: "gray",
              borderRadius: 4,
              padding: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                background: "#f7f7f9",
              }}
            >
              <p className="font-bold">Mandate Details</p>
              <p style={{ color: "#6161ff" }}>Edit Details</p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  flex: 1,
                  paddingTop: 20,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 1,
                  }}
                >
                  <p style={{ color: "gray", fontSize: 14 }}>Project Name</p>
                  <p style={{ fontSize: 14 }}>Sunrise</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 1,
                  }}
                >
                  <p style={{ color: "gray", fontSize: 14 }}>Locality</p>
                  <p style={{ fontSize: 14 }}>WhiteField</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 1,
                  }}
                >
                  <p style={{ color: "gray", fontSize: 14 }}>Micromarket</p>
                  <p style={{ fontSize: 14 }}>WhiteField</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 1,
                  }}
                >
                  <p style={{ color: "gray", fontSize: 14 }}>Configurations</p>
                  <p style={{ fontSize: 14 }}>2BHK, 3BHK, 4BHK</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  flex: 1,
                  paddingTop: 20,
                  paddingLeft: 20,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 1,
                  }}
                >
                  <p style={{ color: "gray", fontSize: 14 }}>City</p>
                  <p style={{ fontSize: 14 }}>Bengaluru</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 1,
                  }}
                >
                  <p style={{ color: "gray", fontSize: 14 }}>Address</p>
                  <p style={{ fontSize: 14 }}>
                    Sector 3, Whitefield, Bangalore 560065
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 1,
                    alignItems: "flex-start",
                  }}
                >
                  <p style={{ color: "gray", fontSize: 14 }}>Ticket Size</p>
                  <p style={{ fontSize: 14 }}>Rs. 91L - Rs. 4 Cr</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 1,
                    alignItems: "flex-start",
                  }}
                >
                  <p style={{ color: "gray", fontSize: 14 }}>Developer Name</p>
                  <p style={{ fontSize: 14 }}>Raheja</p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div style={{ marginTop: "24px" }} />
        <button
          style={{
            background: "#6161ff",
            padding: 12,
            color: "white",
            borderRadius: 12,
            width: 80,
            opacity: !fileName ? 0.4 : 1,
          }}
          disabled={!fileName}
        >
          Run
        </button>
        <button
          style={{
            background: "#EFF1F5",
            padding: "12px 8px",
            marginLeft: 20,
            borderRadius: 12,
            width: 80,
            opacity: !fileName ? 0.6 : 1,
          }}
          onClick={() => setFileName(null)}
          disabled={!fileName}
        >
          Reset
        </button>
      </Container>
      {!loading && fileName && (
        <Container>
          <p style={{ paddingBottom: 20 }}>👁️ Overview</p>
          <hr />
          {/* <div
          style={{
            marginTop: "40px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 40,
            paddingBottom: 40,
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ fontSize: 12, color: "#6B7785" }}>
              Should we take this Project?
            </p>
            <p style={{ fontSize: 24, fontWeight: "bold", color: "#36B37E" }}>
              Yes, Strongly Recommended
            </p>
            <p style={{ fontSize: 16, color: "#6B7785" }}>
              Projected minimum brokerage
            </p>
            <p style={{ fontSize: 14, color: "#6B7785" }}>
              required for Profitability: 1.5% of ticket size
            </p>
          </div>
          <Image src="/yes.png" width={400} height={300} />
        </div> */}
          <Image
            src={`/${result}.png`}
            style={{ width: "100%" }}
            width={1000}
            height={700}
          />

          <p style={{ paddingBottom: 20 }}>📈 Trends</p>
          <hr style={{ marginBottom: 40 }} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "left",
              alignContent: "flex-start",
              alignSelf: "flex-start",
              marginTop: 20,
            }}
          >
            {renderItem(
              "Profitability Forecast: ",
              "Extremely Low (Less than 20%)"
            )}
            {renderItem("Risk Level: ", "High")}
            {renderItem("Market Demand:", "Weak with oversupply")}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "left",
              alignContent: "flex-start",
              alignSelf: "flex-start",
              marginTop: 20,
            }}
          >
            {renderItem(
              "Current Market Conditions:",
              "Slow due to oversupply and stagnant prices"
            )}
            {renderItem(
              "Developer Sentiment: ",
              "Negative (Past delays, low buyer trust)"
            )}
            {renderItem("Past Sales Performance in the Area: ", "Poor")}
          </div>
          <p style={{ paddingBottom: 20, marginTop: 40 }}>
            ⭐ Final Recommendation
          </p>
          <hr />
          <div style={{ marginTop: 24, padding: 16, background: "#f7f7f9" }}>
            <ul>
              {finalReco[result].map((reco) => (
                <li style={{ fontSize: 12, fontWeight: "bold" }}>
                  &bull; {reco}
                </li>
              ))}
            </ul>
          </div>
          <p style={{ paddingBottom: 20, marginTop: 40 }}>✅ Pros</p>
          <hr />
          <div style={{ marginTop: 24, padding: 16, background: "#f7f7f9" }}>
            <ul>
              {pros[result].map((reco) => (
                <li style={{ fontSize: 12, fontWeight: "bold" }}>
                  &bull; {reco}
                </li>
              ))}
            </ul>
          </div>
          <p style={{ paddingBottom: 20, marginTop: 40 }}>⚠️ Cons</p>
          <hr />
          <div style={{ marginTop: 24, padding: 16, background: "#f7f7f9" }}>
            <ul>
              {cons[result].map((reco) => (
                <li style={{ fontSize: 12, fontWeight: "bold" }}>
                  &bull; {reco}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      )}
    </div>
  );
}
