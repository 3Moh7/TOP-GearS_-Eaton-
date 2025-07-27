let topIntent = null;

if (event.nlu && event.nlu.intents && event.nlu.intents.length > 0) {
  workflow.topIntent = event.nlu.intents[0].name;
}

if (!topIntent) {
  workflow.intentResponses = "Sorry, I didn’t catch that. Could you rephrase it?";
  return;
}

workflow.userIntent = topIntent;

const intentResponses = {
  book_appointment: "I can help you book an appointment.",
  check_order_status: "Let me check your order status.",
  complaint: "Sorry to hear that. Let’s get this sorted!"
};

workflow.intentResponses = intentResponses[topIntent] || "Can you clarify what you need help with?";


//chat bot press : https://cdn.botpress.cloud/webchat/v3.1/shareable.html?configUrl=https://files.bpcontent.cloud/2025/07/22/07/20250722075447-QE5FFMP8.json.