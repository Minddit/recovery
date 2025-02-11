import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function RecentCases() {
  const cases = [
    {
      id: "1",
      status: "analyzing",
      amount: "$2,345",
      currency: "BTC",
      date: "2024-02-11",
      user: "John D.",
    },
    {
      id: "2",
      status: "recovering",
      amount: "$12,000",
      currency: "ETH",
      date: "2024-02-10",
      user: "Alice M.",
    },
    {
      id: "3",
      status: "new",
      amount: "$5,600",
      currency: "USDT",
      date: "2024-02-09",
      user: "Bob K.",
    },
    {
      id: "4",
      status: "completed",
      amount: "$8,900",
      currency: "BTC",
      date: "2024-02-08",
      user: "Sarah P.",
    },
  ]

  return (
    <div className="space-y-8">
      {cases.map((case_) => (
        <div key={case_.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback>
              {case_.user.split(" ").map((n) => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{case_.user}</p>
            <p className="text-sm text-muted-foreground">
              {case_.amount} {case_.currency}
            </p>
          </div>
          <div className="ml-auto font-medium">
            <span
              className={
                case_.status === "completed"
                  ? "text-green-500"
                  : case_.status === "analyzing"
                  ? "text-yellow-500"
                  : case_.status === "recovering"
                  ? "text-blue-500"
                  : "text-gray-500"
              }
            >
              {case_.status.charAt(0).toUpperCase() + case_.status.slice(1)}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
