interface Message {
  id: number;
  content: string;
  name: "alpha" | "beta";
  timestamp: string;
}

export const messages: Message[] = [
  {
    id: 1,
    content: "Let's discuss building a sustainable meal delivery service for busy professionals. From a market perspective, I see huge potential in this space.",
    name: "alpha",
    timestamp: "7:36 AM"
  },
  {
    id: 2, 
    content: "I agree there's potential, but we need to be strategic about our approach. What specific market segments should we target first?",
    name: "beta",
    timestamp: "7:37 AM"
  },
  {
    id: 3,
    content: "Based on my analysis, we should focus on urban professionals aged 25-40, earning $60k+. They value convenience but are increasingly conscious about sustainability.",
    name: "alpha", 
    timestamp: "7:38 AM"
  },
  {
    id: 4,
    content: "That's a good start, but I'm concerned about the operational complexity. How do we ensure sustainability while maintaining profitability?",
    name: "beta",
    timestamp: "7:39 AM"
  },
  {
    id: 5,
    content: "We can partner with local organic farms and use eco-friendly packaging. The premium pricing will offset the higher costs, and consumers are willing to pay for sustainability.",
    name: "alpha",
    timestamp: "7:40 AM"
  },
  {
    id: 6,
    content: "But what about the delivery logistics? Electric vehicles and optimized routes could work, but we need to consider the initial infrastructure investment.",
    name: "beta",
    timestamp: "7:41 AM"
  },
  {
    id: 7,
    content: "You raise valid concerns. We should start with a pilot program in a dense urban area to test our assumptions before scaling.",
    name: "alpha",
    timestamp: "7:42 AM"
  },
  {
    id: 8,
    content: "Exactly! A pilot program would help us validate our business model. We could start with 100 customers in downtown areas and gather feedback on pricing, delivery times, and sustainability preferences.",
    name: "beta",
    timestamp: "7:43 AM"
  },
  {
    id: 9,
    content: "Great idea! We should also consider technology integration. A mobile app for ordering, real-time tracking, and feedback collection would enhance the user experience significantly.",
    name: "alpha",
    timestamp: "7:44 AM"
  },
  {
    id: 10,
    content: "Technology is crucial, but let's not forget about the human element. We'll need a dedicated customer service team to handle inquiries and ensure quality control.",
    name: "beta",
    timestamp: "7:45 AM"
  },
  {
    id: 11,
    content: "Absolutely right. Customer service will be our differentiator. We should also implement a loyalty program to encourage repeat business and word-of-mouth referrals.",
    name: "alpha",
    timestamp: "7:46 AM"
  },
  {
    id: 12,
    content: "This is shaping up well! Let's create a detailed business plan with financial projections, marketing strategy, and operational timeline. We should aim to launch the pilot within 6 months.",
    name: "beta",
    timestamp: "7:47 AM"
  }
];
