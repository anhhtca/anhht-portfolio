import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import GithubRedirectCard from "@/components/contact/github-redirect-card";
import { ContactForm } from "@/components/forms/contact-form";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

export default function ContactPage() {
  return (
    <PageContainer
      pageKey="contact"
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7 rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
          <ContactForm />
        </div>
        <div className="lg:col-span-5 flex lg:justify-end">
          <GithubRedirectCard />
        </div>
      </div>
    </PageContainer>
  );
}
