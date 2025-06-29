import { Button } from "./ui/button";

const Report = () => (
  <div className="h-[88%] w-full p-6">
    <h3 className="font-sans font-bold tracking-tight text-3xl">Report</h3>
    <div className="bg-card text-card-foreground border border-border rounded-xl p-4 my-6">
      <h3 className="font-sans font-medium tracking-tight text-xl">Formulated Idea</h3>
      <div className="space-y-4 my-2">
        <div>
          <h4 className="font-medium text-sm text-foreground mb-1">Target Customers</h4>
          <p className="text-muted-foreground text-sm">Urban professionals aged 25-40 with $60k+ income who value convenience and sustainability</p>
        </div>
        <div>
          <h4 className="font-medium text-sm text-foreground mb-1">USPs</h4>
          <p className="text-muted-foreground text-sm">Organic farm partnerships, electric vehicle delivery, mobile app with real-time tracking, exceptional customer service, loyalty programs, sustainable packaging</p>
        </div>
        <div>
          <h4 className="font-medium text-sm text-foreground mb-1">Identified Challenges</h4>
          <p className="text-muted-foreground text-sm">Balancing sustainability with operational efficiency, scaling delivery infrastructure, market validation through pilot program, securing $500k initial funding</p>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-2 mt-8 font-medium">
      <Button>Refine Idea</Button>
      <Button>Explore Alternatives</Button>
    </div>
  </div>
)

export default Report;