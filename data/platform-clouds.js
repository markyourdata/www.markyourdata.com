// Cloud provider data for the platform architecture toggle
// Used by components/cloud-toggle.js

const platformCloudsData = {
  defaultCloud: "gcp",
  clouds: [
    {
      id: "gcp",
      label: "GCP",
      image: "assets/images/featured/mark_your_data_analytics_platform.png",
      imageAlt:
        "Mark Your Data analytics platform architecture diagram showing DLT, DBT, and GCP Cloud Run workflow",
      intro:
        "The architecture uses a small set of managed GCP services, each doing one job well. Together they form a fully automated pipeline from source systems to dashboards, with no manual steps in between.",
      customization: {
        text: "The stack is not fixed. You can swap in different reporting tools or replace the data warehouse entirely. BigQuery can be replaced with MotherDuck for even lower storage costs, for example. Note that MotherDuck currently runs on AWS only, so connecting it to a GCP-based pipeline may incur cross-cloud egress fees. Read",
        link: {
          path: "pages/blogs/motherduck-the-future-of-cost-efficient-analytics.html",
          text: "why we are enthusiastic about MotherDuck",
        },
        suffix: ".",
      },
      sections: [
        {
          title: "Data flow",
          components: [
            {
              label: "Cloud Scheduler",
              description:
                "Triggers Cloud Workflows on a fixed schedule. Daily, hourly, or any interval you need.",
            },
            {
              label: "Cloud Workflows",
              description:
                "Orchestrates the pipeline. Triggers the DLT job, waits for it to complete, then triggers the DBT job.",
            },
            {
              label: "DLT (Data Load Tool)",
              description:
                "Ingests raw data from your sources and writes it to BigQuery. Open-source alternative to Fivetran with ~5,000 GitHub stars. See our",
              link: {
                path: "pages/blogs/why-dlt-beats-fivetran.html",
                text: "DLT vs Fivetran comparison",
              },
              suffix: ".",
            },
            {
              label: "DBT (Data Build Tool)",
              description:
                "Reads the raw BigQuery data and transforms it into curated, combined datasets ready for analysis and reporting. Industry standard with ~10,000 GitHub stars. Read our guide:",
              link: {
                path: "pages/blogs/dbt-transform-data-into-insights.html",
                text: "Transforming Data into Insights with DBT",
              },
              suffix: ".",
            },
            {
              label: "BigQuery",
              description:
                "Serverless data warehouse that stores both the raw ingested data and the curated DBT output. Pay per query, no infrastructure to manage.",
            },
            {
              label: "Looker Studio",
              description:
                "Dashboards built on the curated BigQuery datasets. Free, browser-based, no setup required.",
            },
          ],
        },
        {
          title: "Platform foundation",
          components: [
            {
              label: "Docker Containers",
              description:
                "Packages each pipeline as a portable, reproducible unit. Runs identically in development and production.",
            },
            {
              label: "Artifact Registry",
              description:
                "Stores the container images used by Cloud Run Jobs.",
            },
            {
              label: "Cloud Run Jobs",
              description:
                "Runs each containerized pipeline. Scales to zero when not in use.",
            },
            {
              label: "Secret Manager",
              description:
                "Keeps API keys, passwords, and credentials out of your code.",
            },
            {
              label: "IAM",
              description:
                "Defines roles with the right level of access. Data analysts get access to analyses datasets, reporting users get read-only access to reporting datasets.",
            },
            {
              label: "Git version control",
              description:
                "Every pipeline is code. Tracked, reviewed, and reversible.",
            },
          ],
        },
      ],
    },
    {
      id: "aws",
      label: "AWS",
      image: "assets/images/featured/mark_your_data_analytics_platform.png",
      imageAlt:
        "Mark Your Data analytics platform architecture diagram showing DLT, DBT, and AWS Fargate workflow",
      components: [
        {
          label: "DLT (Data Load Tool)",
          description:
            "Open-source data ingestion. Popular alternative to Fivetran with ~5,000 GitHub stars. Learn more in our",
          link: {
            path: "pages/blogs/why-dlt-beats-fivetran.html",
            text: "DLT vs Fivetran comparison",
          },
          suffix: ".",
        },
        {
          label: "DBT (Data Build Tool)",
          description:
            "Industry standard for data transformation with ~10,000 GitHub stars. Read our guide:",
          link: {
            path: "pages/blogs/dbt-transform-data-into-insights.html",
            text: "Transforming Data into Insights with DBT",
          },
          suffix: ".",
        },
        {
          label: "Amazon Redshift",
          description:
            "Fully managed data warehouse — scales to petabytes, deep integration with the AWS ecosystem and DBT",
        },
        {
          label: "Docker Containers",
          description: "Package pipelines for consistent deployment",
        },
        {
          label: "Amazon ECR",
          description:
            "Store and manage Docker container images in Amazon Elastic Container Registry",
        },
        {
          label: "AWS Fargate",
          description:
            "Serverless compute that scales to zero when not in use, no cluster management needed",
        },
        {
          label: "Amazon EventBridge Scheduler",
          description: "Trigger workflows on schedule (daily, hourly, etc.)",
        },
        {
          label: "AWS Step Functions",
          description:
            "Orchestrates multi-step pipelines — runs data ingestion first, then triggers data model transformations on completion",
        },
        {
          label: "AWS Secrets Manager",
          description:
            "Centrally store and securely access API keys, passwords, and credentials",
        },
        {
          label: "Amazon QuickSight",
          description:
            "Cloud-native BI with pay-per-session pricing and native Redshift integration",
        },
        {
          label: "Git Version Control",
          description: "All pipelines are code, tracked, and reviewable",
        },
      ],
    },
    {
      id: "azure",
      label: "Azure",
      image: "assets/images/featured/mark_your_data_analytics_platform.png",
      imageAlt:
        "Mark Your Data analytics platform architecture diagram showing DLT, DBT, and Azure Container Apps workflow",
      components: [
        {
          label: "DLT (Data Load Tool)",
          description:
            "Open-source data ingestion. Popular alternative to Fivetran with ~5,000 GitHub stars. Learn more in our",
          link: {
            path: "pages/blogs/why-dlt-beats-fivetran.html",
            text: "DLT vs Fivetran comparison",
          },
          suffix: ".",
        },
        {
          label: "DBT (Data Build Tool)",
          description:
            "Industry standard for data transformation with ~10,000 GitHub stars. Read our guide:",
          link: {
            path: "pages/blogs/dbt-transform-data-into-insights.html",
            text: "Transforming Data into Insights with DBT",
          },
          suffix: ".",
        },
        {
          label: "Azure Synapse Analytics",
          description:
            "Unified analytics service combining data warehousing and big data — integrates natively with Power BI and DBT",
        },
        {
          label: "Docker Containers",
          description: "Package pipelines for consistent deployment",
        },
        {
          label: "Azure Container Registry",
          description: "Store and manage Docker container images",
        },
        {
          label: "Azure Container Apps",
          description:
            "Serverless compute that scales to zero when not in use, fully managed by Azure",
        },
        {
          label: "Azure Logic Apps",
          description:
            "Trigger workflows on schedule and orchestrate multi-step pipelines — runs data ingestion first, then triggers data model transformations on completion",
        },
        {
          label: "Azure Key Vault",
          description:
            "Centrally store and securely access API keys, passwords, and credentials",
        },
        {
          label: "Microsoft Power BI",
          description:
            "Enterprise BI deeply integrated with the Azure ecosystem — widely adopted and familiar to most analysts",
        },
        {
          label: "Git Version Control / Azure DevOps",
          description: "All pipelines are code, tracked, and reviewable",
        },
      ],
    },
  ],
};
