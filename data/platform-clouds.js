// Cloud provider data for the platform architecture toggle
// Used by components/cloud-toggle.js

const platformCloudsData = {
  defaultCloud: "gcp",
  clouds: [
    {
      id: "gcp",
      label: "GCP",
      image:
        "assets/images/featured/mark_your_data_analytics_and_ai_platform_gcp.png",
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
      image:
        "assets/images/featured/mark_your_data_analytics_and_ai_platform_aws.png",
      imageAlt:
        "Mark Your Data analytics platform architecture diagram showing DLT, DBT, MotherDuck, and AWS Fargate workflow",
      intro:
        "The architecture uses a small set of managed AWS services, each doing one job well. Together they form a fully automated pipeline from source systems to dashboards, with no manual steps in between.",
      customization: {
        text: "The stack is not fixed. You can swap in different reporting tools or scale up the database. If your data grows to petabyte scale, MotherDuck can be replaced with Amazon Redshift. Read",
        link: {
          path: "pages/blogs/motherduck-the-future-of-cost-efficient-analytics.html",
          text: "why we default to MotherDuck on AWS",
        },
        suffix: ".",
      },
      sections: [
        {
          title: "Data flow",
          components: [
            {
              label: "Amazon EventBridge Scheduler",
              description:
                "Triggers Step Functions on a fixed schedule. Daily, hourly, or any interval you need.",
            },
            {
              label: "AWS Step Functions",
              description:
                "Orchestrates the pipeline. Triggers the DLT job, waits for it to complete, then triggers the DBT job.",
            },
            {
              label: "DLT (Data Load Tool)",
              description:
                "Ingests raw data from your sources and writes it to MotherDuck. Open-source alternative to Fivetran with ~5,000 GitHub stars. See our",
              link: {
                path: "pages/blogs/why-dlt-beats-fivetran.html",
                text: "DLT vs Fivetran comparison",
              },
              suffix: ".",
            },
            {
              label: "DBT (Data Build Tool)",
              description:
                "Reads the raw MotherDuck data and transforms it into curated, combined datasets ready for analysis and reporting. Industry standard with ~10,000 GitHub stars. Read our guide:",
              link: {
                path: "pages/blogs/dbt-transform-data-into-insights.html",
                text: "Transforming Data into Insights with DBT",
              },
              suffix: ".",
            },
            {
              label: "MotherDuck",
              description:
                "Serverless analytical database built on DuckDB, running natively on AWS. Stores both the raw ingested data and the curated DBT output. Fast, cost-effective, and no infrastructure to manage.",
            },
            {
              label: "Amazon QuickSight",
              description:
                "Dashboards built on the curated MotherDuck datasets. Cloud-native BI with pay-per-session pricing, no server to manage.",
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
              label: "Amazon ECR",
              description: "Stores the container images used by AWS Fargate.",
            },
            {
              label: "AWS Fargate",
              description:
                "Runs each containerized pipeline. Scales to zero when not in use, no cluster management needed.",
            },
            {
              label: "AWS Secrets Manager",
              description:
                "Keeps API keys, passwords, and credentials out of your code.",
            },
            {
              label: "AWS IAM",
              description:
                "Defines roles with the right level of access. Data analysts get access to development datasets, reporting users get read-only access to curated datasets.",
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
      id: "azure",
      label: "Azure",
      image:
        "assets/images/featured/mark_your_data_analytics_and_ai_platform_azure.png",
      imageAlt:
        "Mark Your Data analytics platform architecture diagram showing DLT, DBT, and Azure Container Apps workflow",
      intro:
        "The architecture uses a small set of managed Azure services, each doing one job well. Together they form a fully automated pipeline from source systems to dashboards, with no manual steps in between.",
      customization: {
        text: "The stack is not fixed. You can swap in different reporting tools or replace the database entirely. PostgreSQL can be replaced with MotherDuck for even lower storage costs and in-process analytics. Note that MotherDuck currently runs on AWS only, so connecting it to an Azure-based pipeline may incur cross-cloud egress fees. Read",
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
              label: "Azure Logic Apps",
              description:
                "Schedules and orchestrates the pipeline. Triggers the DLT job on a fixed schedule, waits for it to complete, then triggers the DBT job.",
            },
            {
              label: "DLT (Data Load Tool)",
              description:
                "Ingests raw data from your sources and writes it to PostgreSQL. Open-source alternative to Fivetran with ~5,000 GitHub stars. See our",
              link: {
                path: "pages/blogs/why-dlt-beats-fivetran.html",
                text: "DLT vs Fivetran comparison",
              },
              suffix: ".",
            },
            {
              label: "DBT (Data Build Tool)",
              description:
                "Reads the raw PostgreSQL data and transforms it into curated, combined datasets ready for analysis and reporting. Industry standard with ~10,000 GitHub stars. Read our guide:",
              link: {
                path: "pages/blogs/dbt-transform-data-into-insights.html",
                text: "Transforming Data into Insights with DBT",
              },
              suffix: ".",
            },
            {
              label: "Azure Database for PostgreSQL",
              description:
                "Open-source managed SQL database that stores both the raw ingested data and the curated DBT output. Cost-effective, fast, and natively queryable by DuckDB and MotherDuck.",
            },
            {
              label: "Microsoft Power BI",
              description:
                "Dashboards built on the curated PostgreSQL datasets. Widely adopted, deeply integrated with the Azure ecosystem, and familiar to most analysts.",
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
              label: "Azure Container Registry",
              description:
                "Stores the container images used by Azure Container Apps.",
            },
            {
              label: "Azure Container Apps",
              description:
                "Runs each containerized pipeline. Scales to zero when not in use, fully managed by Azure.",
            },
            {
              label: "Azure Key Vault",
              description:
                "Keeps API keys, passwords, and credentials out of your code.",
            },
            {
              label: "Azure Entra ID",
              description:
                "Defines roles with the right level of access. Data analysts get access to development datasets, reporting users get read-only access to curated datasets.",
            },
            {
              label: "Git version control / Azure DevOps",
              description:
                "Every pipeline is code. Tracked, reviewed, and reversible.",
            },
          ],
        },
      ],
    },
  ],
};
