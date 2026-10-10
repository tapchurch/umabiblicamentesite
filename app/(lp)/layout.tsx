import "./lp.css";

// Landing pages de venda: sem menu nem links para fora, para não tirar a atenção da compra.
export default function LpLayout({ children }: { children: React.ReactNode }) {
  return <main className="lp">{children}</main>;
}
