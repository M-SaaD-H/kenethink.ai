export interface Message {
  id: number;
  content: string;
  name: "alpha" | "beta";
  timestamp: string;
}

export const messages: Message[] = [
  {
    id: 1,
    content: "Looking at the market data, I see tremendous opportunity in the sustainable meal delivery space. The market is growing at 15% annually, with urban professionals driving demand.",
    name: "alpha",
    timestamp: "7:36 AM"
  },
  {
    id: 2, 
    content: "The market opportunity is clear, but we need to design a product that can capture it effectively. What's our competitive positioning strategy?",
    name: "beta",
    timestamp: "7:37 AM"
  },
  {
    id: 3,
    content: "Market research shows our target demographic - urban professionals 25-40 earning $60k+ - values both convenience and sustainability. They're willing to pay 20% premium for eco-friendly options.",
    name: "alpha", 
    timestamp: "7:38 AM"
  },
  {
    id: 4,
    content: "Good market insight. Now let's design the product experience. How do we balance sustainability with operational efficiency? We need a scalable model.",
    name: "beta",
    timestamp: "7:39 AM"
  },
  {
    id: 5,
    content: "The market supports premium pricing for sustainable options. We can partner with local organic farms and use eco-friendly packaging. Consumers are paying $3-5 more for sustainable delivery.",
    name: "alpha",
    timestamp: "7:40 AM"
  },
  {
    id: 6,
    content: "Partnerships are key to our product strategy. But we need to design the delivery infrastructure carefully - electric vehicles, optimized routes, and real-time tracking systems.",
    name: "beta",
    timestamp: "7:41 AM"
  },
  {
    id: 7,
    content: "Market validation is crucial. We should pilot in a dense urban area first to test market assumptions and gather customer feedback on pricing sensitivity.",
    name: "alpha",
    timestamp: "7:42 AM"
  },
  {
    id: 8,
    content: "Perfect approach. Let's design the pilot program with 100 customers in downtown areas. We'll test different pricing tiers, delivery windows, and menu options to optimize the product-market fit.",
    name: "beta",
    timestamp: "7:43 AM"
  },
  {
    id: 9,
    content: "Technology integration is essential for market penetration. A mobile app with ordering, tracking, and feedback will differentiate us from competitors and improve customer retention.",
    name: "alpha",
    timestamp: "7:44 AM"
  },
  {
    id: 10,
    content: "The tech platform is our product's backbone. But we also need to design exceptional customer service - it's our key differentiator and will drive word-of-mouth growth.",
    name: "beta",
    timestamp: "7:45 AM"
  },
  {
    id: 11,
    content: "Customer service drives market share. We should implement a loyalty program to increase customer lifetime value and encourage referrals, which are our most cost-effective acquisition channel.",
    name: "alpha",
    timestamp: "7:46 AM"
  },
  {
    id: 12,
    content: "Great strategic thinking. Now let's design our go-to-market strategy. We need a detailed business plan with clear product milestones, marketing strategy, and operational roadmap for a 6-month launch.",
    name: "beta",
    timestamp: "7:47 AM"
  },
  {
    id: 13,
    content: "Based on market analysis, we'll need $500k initial funding for the pilot. This includes kitchen infrastructure, delivery fleet, and marketing budget to reach our target demographic.",
    name: "alpha",
    timestamp: "7:48 AM"
  },
  {
    id: 14,
    content: "That funding requirement aligns with our product development needs. We should explore multiple funding sources - angel investors, crowdfunding, and strategic partnerships with existing delivery platforms.",
    name: "beta",
    timestamp: "7:49 AM"
  },
  {
    id: 15,
    content: "Perfect! Let's start with the business plan. I'll focus on market analysis and competitive positioning, while you work on product development roadmap and operational strategy.",
    name: "alpha",
    timestamp: "7:50 AM"
  }
];
