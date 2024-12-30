export interface SiteDetail {
  title: string
  content: string
}

export interface DetailItemProps {
  detail: SiteDetail
}

export interface SiteData {
  SiteTitle: string
  SiteContent: string
  SiteInformation: SiteDetail[]
}
