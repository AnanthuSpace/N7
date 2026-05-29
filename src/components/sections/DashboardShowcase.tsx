import { Section } from "@/components/ui/section";
import { ArrowRight, Check } from "lucide-react";

const checklist = [
  "Customer-On Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
];

const checklistFirstColumn = checklist.slice(0, 5);
const checklistSecondColumn = checklist.slice(5);

function ChecklistItem({ item }: { item: string }) {
  return (
    <li className="flex items-start gap-3 text-sm text-slate-300">
      <span className="btn-gradient mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white">
        <Check className="h-3 w-3" />
      </span>
      {item}
    </li>
  );
}

function LaptopOutline({
  align = "right",
  screenImage,
}: {
  align?: "left" | "right";
  screenImage?: string;
}) {
  const isRight = align === "right";

  return (
    <div
      className={`flex w-full flex-col ${isRight ? "ml-auto items-end" : "mr-auto items-start"
        }`}
    >
      <div
        className={`n7-gradient-border ${isRight
          ? "w-[90%] rounded-tl-lg rounded-tr-lg rounded-bl-sm pt-[2px] pl-[2px] pr-0 pb-0"
          : "w-[82%] rounded-tl-lg rounded-tr-lg rounded-br-sm pt-[2px] pr-[2px] pl-0 pb-0"
          }`}
      >
        <div
          className={`relative aspect-square overflow-hidden bg-[#0c1424] ${isRight
            ? "rounded-tl-[6px] rounded-tr-[6px] rounded-bl-[2px]"
            : "rounded-tl-[6px] rounded-tr-[6px] rounded-br-[2px]"
            }`}
        >
          {screenImage && (
            <img
              src={screenImage}
              alt={isRight ? "Dashboard preview" : "Graph preview"}
              className={
                isRight
                  ? "absolute left-2 top-2 block h-[calc(100%-0.5rem)] w-auto max-w-none"
                  : "absolute left-0 top-2 right-2 bottom-0 block h-[calc(100%-0.5rem)] w-[calc(100%-0.5rem)] object-cover object-left object-top"
              }
            />
          )}
        </div>
      </div>
      <div
        className={`n7-gradient-border ${isRight
          ? "w-[105%] rounded-tl-md rounded-tr-md rounded-br-md rounded-bl-[1.75rem] pt-[2px] pl-[2px] pb-[2px] pr-0"
          : "w-[96%] rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-[1.75rem] pt-[2px] pr-[2px] pb-[2px] pl-0"
          }`}
      >
        <div
          className={`h-10 bg-black ${isRight
            ? "rounded-tl-[4px] rounded-tr-[4px] rounded-br-[4px] rounded-bl-[calc(1.75rem-2px)]"
            : "rounded-tl-[4px] rounded-tr-[4px] rounded-bl-[4px] rounded-br-[calc(1.75rem-2px)]"
            }`}
        />
      </div>
    </div>
  );
}

export function DashboardShowcase() {
  return (
    <>
      <Section>
        <div className="section-container-flush-right grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              A complete dashboard for core banking
            </h2>
            <p className="mt-4 text-slate-400">
              Faster time to market with our cloud-based core banking services
            </p>
            <div className="mt-8 flex flex-col items-start gap-4">
              <button
                type="button"
                className="btn-gradient font-chivo inline-flex h-12 items-center justify-center rounded-md px-8 text-base tracking-wide text-white shadow-lg shadow-blue-600/25 transition-opacity hover:opacity-90"
              >
                REQUEST DEMO
              </button>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 uppercase tracking-wide transition-colors hover:text-blue-300"
              >
                <span className="underline underline-offset-4">LEARN MORE</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <LaptopOutline align="right" screenImage="/assets/Dashboard.png" />
          </div>
        </div>
      </Section>

      <Section>
        <div className="section-container-flush-left grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <LaptopOutline align="left" screenImage="/assets/Graph.png" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Run a more efficient, flexible,and digitally connected corebanking system
            </h2>
            <p className="mt-4">
              What you will get:
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-x-8">
              <ul className="space-y-4">
                {checklistFirstColumn.map((item) => (
                  <ChecklistItem key={item} item={item} />
                ))}
              </ul>
              <ul className="space-y-4">
                {checklistSecondColumn.map((item) => (
                  <ChecklistItem key={item} item={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
