export type HomeDataType = {
    id: number
    banner: HomeDataBannerImageType[]
    choose_us: HomeDataChooseUs
    set_us_apart: HomeDataSetUsApart
    about_us: HomeDataAboutUs
    contact_us:HomeDataContactUs
    footer:FooterContent
    how_to_use:HomeDataHowToUse
    products:HomeDataProducts
}

export type HomeDataProducts={
    item:ProductItems[]
}

export type ProductItems={
    name:string
    description:string
    item_image:HomeDataIndividualBannerImageType[]
    item_labels:ItemLabel[]
    item_price:ItemPrice[]
    id:number
}

export type ItemPrice={
    id:number
    weekly_price:string
    sachet_price:string
}

export type ItemLabel={
    id:number
    label:string
}

export type HomeDataHowToUse={
    title:string
    subtitle:string
    how_to_use_points:HomeDataHowToUsePoints[]
}

export type HomeDataHowToUsePoints={
    point_title:string
    point_description:string
}

export type FooterContent={
    footer_content:string
}

export type HomeDataBannerImageType = {
    id: number
    banner_image_link: HomeDataIndividualBannerImageType[]
}

export type HomeDataIndividualBannerImageType = {
    id: number
    url: string
}


export type HomeDataChooseUs = {
    title: string
    subtitle: string
    choose_us_points: HomeDataChooseUsPoints[]
}

export type HomeDataChooseUsPoints = {
    id: number
    point: string
}


export type HomeDataSetUsApart = {
    id: number
    title: string
    subtitle: string
    set_us_apart_points: HomeDataSetUsApartPoints[]
}

export type HomeDataSetUsApartPoints = {
    id: number
    point_title: string
    point_description: string
}

export type HomeDataAboutUs = {
    about_us_section: HomeDataAboutUsPoints[]
    title: string
    id: number
}

export type HomeDataAboutUsPoints = {
    section_title: string
    section_description: string
    about_us_media:HomeDataIndividualBannerImageType
    id: number
}

export type HomeDataContactUs={
    title:string
    subtitle:string
    contact_info:HomeDataContactUsPoints[]
}


export type HomeDataContactUsPoints={
    instagram:string
    location:string
    email:string
    linkedIn:string
}