import * as React from "react";
import { FeedbackWorkflow, QuestProvider } from "@questlabs/react-sdk";
import { useState } from "react";
import "@questlabs/react-sdk/dist/style.css";
const FeedbackWorkflowComponent = () => {
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  const handleFeedbackClick = () => {
    setFeedbackOpen(true);
  };
  const handleClose = () => {
    setFeedbackOpen(false);
  };

  return (
    <div>
      <div className="feedback-btn-div" onClick={handleFeedbackClick}>
        <div className="arrow-icon">
          <img src="assets/icons/angle-left-solid.png" alt="not" />
        </div>
        <div className="feedback-btn-content">Feedback</div>
      </div>
      <div>
        <QuestProvider
          apiKey="k-bdcf059e-6075-4e95-a7d1-d296431aa6ff"
          entityId="e-7d7ef77b-519a-4d14-a51d-95770284a162"
          apiSecret=""
          apiType="STAGING"
          themeConfig={{
            backgroundColor: "",
            borderColor: "",
            buttonColor: "#019F7F",
            primaryColor: "",
            secondaryColor: "",
            fontFamily: "",
          }}
        >
          <FeedbackWorkflow
          isOpen={feedbackOpen}
          onClose={handleClose}
            userId="u-51b1eb69-7084-4ada-8912-e694efcfba0c"
            token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LTUxYjFlYjY5LTcwODQtNGFkYS04OTEyLWU2OTRlZmNmYmEwYyIsImlhdCI6MTcxMzUwMDc1OSwiZXhwIjoxNzE0MTA1NTU5fQ.DQ55L6y-IpgBWV5zmmTH2_A1kVVGqnsXOp_RPXfhwK0"
            questIds={['q-5d3dcb4d-108a-45ab-83e0-8fadeb0e0b48','q-b5cb08d5-294c-4cf5-a720-9704d5ff79ff','q-0ab36321-3f16-4bec-a87b-a944e78ff0b7','q-e4dd1176-bb1d-4744-9202-1e6d4d78f0b4']}
            styleConfig={{
              listHover: {
                background: "",
                iconBackground: "#F0F7F5",
                iconColor: "#019F7F",
                Heading: "",
                Description: "",
              },
              
              // ThanksPopUp:{backgroundColor:"#019F7F"}
            }}
            showFooter={false}
            contactUrl="https://calendly.com/shubham-quest/chat"
          />
        </QuestProvider>
      </div>
    </div>
  );
};

export default FeedbackWorkflowComponent;
