import DataEnrichmentLead from "@/components/about services/DataEnrichmentLead";
import EcommerceLead from "@/components/about services/EcommerceLead";
import InfluencerLead from "@/components/about services/InfluencerLead";
import LeadGeneration from "@/components/about services/LeadGeneration";
import VirtualAssistantLead from "@/components/about services/VirtualAssistantLead";
import WebResearchLead from "@/components/about services/WebResearchLead";
import Loading from "@/components/Loading";
import { Suspense } from "react";

export function generateStaticParams() {
  return [
    { id: "Lead-Generation" },
    { id: "E-commerce-leads" },
    { id: "Influencer-Leads" },
    { id: "Data-Enrichment" },
    { id: "Virtual-Assistant" },
    { id: "Web-Research" },
  ];
}

const Service = ({ params }: { params: { id: string } }) => {
  const slug = params.id;
  if (slug === "Lead-Generation") {
    return (
      <Suspense fallback={<Loading />}>
        <LeadGeneration />
      </Suspense>
    );
  }
  if (slug === "E-commerce-leads") {
    return (
      <Suspense fallback={<Loading />}>
        <EcommerceLead />
      </Suspense>
    );
  }
  if (slug === "Influencer-Leads") {
    return (
      <Suspense fallback={<Loading />}>
        <InfluencerLead />
      </Suspense>
    );
  }
  if (slug === "Data-Enrichment") {
    return (
      <Suspense fallback={<Loading />}>
        <DataEnrichmentLead />
      </Suspense>
    );
  }
  if (slug === "Virtual-Assistant") {
    return (
      <Suspense fallback={<Loading />}>
        <VirtualAssistantLead />
      </Suspense>
    );
  }
  if (slug === "Web-Research") {
    return (
      <Suspense fallback={<Loading />}>
        <WebResearchLead />
      </Suspense>
    );
  }
};

export default Service;
