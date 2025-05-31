import { getHomeData } from "@/api/call";
import ContentLayout from "@/components/layouts/ContentLayout";
import HeroBanner from "@/site-ui/landing/hero-banner";
import AboutUs from "@/site-ui/sections/about-us";
import ContactUs from "@/site-ui/sections/contact-us";
import HowToUse from "@/site-ui/sections/how-to-use";
import SetUsApart from "@/site-ui/sections/key-points";
import ShopBlnd from "@/site-ui/sections/shop-blnd";
import WhyChooseUs from "@/site-ui/sections/why-choose-us";
import { HomeDataType } from "@/types/types";
export const revalidate=0


export default async function Home() {
  const data:HomeDataType=await getHomeData()
  return (
    <div className="flex flex-col size-full">
      <HeroBanner banner={data?.banner}/>
      <ContentLayout>
        <WhyChooseUs data={data?.choose_us}/>
        <ShopBlnd data={data?.products}/>
        <SetUsApart data={data?.set_us_apart}/>
        <HowToUse data={data?.how_to_use}/>
        {/* <AboutUs data={data?.about_us}/> */}
        <ContactUs data={data?.contact_us}/>
      </ContentLayout>
    </div>
  );
}
