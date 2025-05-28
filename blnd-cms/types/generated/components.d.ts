import type { Schema, Struct } from '@strapi/strapi';

export interface HomepageAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_homepage_about_uses';
  info: {
    displayName: 'about_us';
  };
  attributes: {
    about_us_section: Schema.Attribute.Component<
      'homepage.about-us-section',
      true
    >;
    title: Schema.Attribute.Text;
  };
}

export interface HomepageAboutUsSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_about_us_sections';
  info: {
    description: '';
    displayName: 'about_us_section';
  };
  attributes: {
    about_us_media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    section_description: Schema.Attribute.RichText;
    section_title: Schema.Attribute.Text;
  };
}

export interface HomepageChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_homepage_choose_uses';
  info: {
    displayName: 'choose_us';
  };
  attributes: {
    choose_us_points: Schema.Attribute.Component<
      'homepage.choose-us-points',
      true
    >;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface HomepageChooseUsPoints extends Struct.ComponentSchema {
  collectionName: 'components_homepage_choose_us_points';
  info: {
    displayName: 'Choose_us_points';
  };
  attributes: {
    point: Schema.Attribute.Text;
  };
}

export interface HomepageContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_homepage_contact_infos';
  info: {
    description: '';
    displayName: 'contact_info';
  };
  attributes: {
    email: Schema.Attribute.RichText;
    instagram: Schema.Attribute.RichText;
    linkedIn: Schema.Attribute.RichText;
    location: Schema.Attribute.Text;
  };
}

export interface HomepageContactUs extends Struct.ComponentSchema {
  collectionName: 'components_homepage_contact_uses';
  info: {
    displayName: 'contact_us';
  };
  attributes: {
    contact_info: Schema.Attribute.Component<'homepage.contact-info', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface HomepageFooter extends Struct.ComponentSchema {
  collectionName: 'components_homepage_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    footer_content: Schema.Attribute.RichText;
  };
}

export interface HomepageHomepage extends Struct.ComponentSchema {
  collectionName: 'components_homepage_homepages';
  info: {
    description: '';
    displayName: 'banner_images';
  };
  attributes: {
    banner_image_link: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface HomepageHowToUse extends Struct.ComponentSchema {
  collectionName: 'components_homepage_how_to_uses';
  info: {
    displayName: 'how_to_use';
  };
  attributes: {
    how_to_use_points: Schema.Attribute.Component<
      'homepage.how-to-use-points',
      true
    >;
    susbtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface HomepageHowToUsePoints extends Struct.ComponentSchema {
  collectionName: 'components_homepage_how_to_use_points';
  info: {
    displayName: 'how_to_use_points';
  };
  attributes: {
    point_description: Schema.Attribute.Text;
    point_title: Schema.Attribute.Text;
  };
}

export interface HomepageSetUsApart extends Struct.ComponentSchema {
  collectionName: 'components_homepage_set_us_aparts';
  info: {
    displayName: 'set_us_apart';
  };
  attributes: {
    set_us_apart_points: Schema.Attribute.Component<
      'homepage.set-us-apart-points',
      true
    >;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface HomepageSetUsApartPoints extends Struct.ComponentSchema {
  collectionName: 'components_homepage_set_us_apart_points';
  info: {
    displayName: 'set_us_apart_points';
  };
  attributes: {
    point_description: Schema.Attribute.Text;
    point_title: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'homepage.about-us': HomepageAboutUs;
      'homepage.about-us-section': HomepageAboutUsSection;
      'homepage.choose-us': HomepageChooseUs;
      'homepage.choose-us-points': HomepageChooseUsPoints;
      'homepage.contact-info': HomepageContactInfo;
      'homepage.contact-us': HomepageContactUs;
      'homepage.footer': HomepageFooter;
      'homepage.homepage': HomepageHomepage;
      'homepage.how-to-use': HomepageHowToUse;
      'homepage.how-to-use-points': HomepageHowToUsePoints;
      'homepage.set-us-apart': HomepageSetUsApart;
      'homepage.set-us-apart-points': HomepageSetUsApartPoints;
    }
  }
}
