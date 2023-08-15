
export interface IImage {
    id: string;
    slug: string;
    created_at: string;
    updated_at: string;
    promoted_at: string;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description: string;
    alt_description: string;
    IUrls: any[];
    urls: IUrls;
    links: ILinks;
    likes: number;
    liked_by_user: boolean;
    current_user_collections: any[];
    sponsorship: ISponsorship;
    topic_submissions: any;
    user: IUser;
}

export interface ILinks {
    self: string;
    html: string;
    download: string;
    download_location: string;
}

export interface ISponsorship {
    impression_urls: string[];
    tagline: string;
    tagline_url: string;
    sponsor: IUser;
}

export interface IUser {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: null;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location: string;
    links: IUserLinks;
    profile_image: IProfileImage;
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: ISocial;
}

export interface IUserLinks {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
}

export interface IProfileImage {
    small: string;
    medium: string;
    large: string;
}

export interface ISocial {
    instagram_username: string;
    portfolio_url: string;
    twitter_username: string;
    paypal_email: null;
}


export interface IUrls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
}

export interface IComment {
    id: string;
    author: string;
    date: Date;
    body: string;
    imageId: string;
}