import { CardItem } from "@/components/home-page/CardItem";
import { HPFilter } from "@/components/home-page/HPFilter";
import { HPToolbar } from "@/components/home-page/HPToolbar";

export default function Home() {
  return (
    <div className="flex flex-col p-[50px]">
      {/* Header */}
      <aside>
        <HPToolbar />
      </aside>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 shrink-0">
          <HPFilter />
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-6 py-4">
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-[30px]">
            {Array.from({ length: 8 }).map((_, i) => (
              <CardItem
                key={i}
                image="/cards/card-1.png"
                title="2024 Wings of the Captain Rebecca #0P05-091 PSA 10"
                price="130"
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
