import ServiceTemplate from "@/components/ServiceTemplate";

export default function WebsiteManagementPage() {
  return (
    <ServiceTemplate 
      title="Website Management"
      description="Your website requires continuous maintenance to remain secure, fast, and competitive. We handle everything from daily backups and security patching to seamless content updates so you can focus on running your business."
      features={[
        "24/7 Security Monitoring & Firewalls",
        "Daily & Weekly Cloud Backups",
        "Core Software & Plugin Updates",
        "Monthly Health Checks",
        "On-demand Content Modifications",
        "Dedicated Technical Support"
      ]}
    />
  );
}
