export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="dashboard_layout">
        {children}
      </div>
    );
  }
  