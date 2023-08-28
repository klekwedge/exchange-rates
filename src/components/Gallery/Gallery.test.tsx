import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Gallery from './Gallery';
import { IImage } from '../../types';

const mockImageList: IImage[] = [
  {
    id: 'Nyvq2juw4_o',
    slug: 'Nyvq2juw4_o',
    created_at: '2016-11-01T00:26:28Z',
    updated_at: '2023-08-27T15:00:57Z',
    promoted_at: '2016-11-01T00:26:28Z',
    width: 3465,
    height: 2131,
    color: '#0c2640',
    blur_hash: 'LhEMa,W=WVWW_4kBjtW=?bkBaefR',
    description: 'City architecture and skyscrapers near waterfront',
    alt_description: 'white and brown city buildings during daytime',
    breadcrumbs: [],
    urls: {
      raw: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixid=M3w0ODkxOTN8MHwxfHNlYXJjaHwxfHxjaXR5fGVufDB8MHx8fDE2OTMxNTg4MTJ8MA&ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0ODkxOTN8MHwxfHNlYXJjaHwxfHxjaXR5fGVufDB8MHx8fDE2OTMxNTg4MTJ8MA&ixlib=rb-4.0.3&q=85',
      regular:
        'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODkxOTN8MHwxfHNlYXJjaHwxfHxjaXR5fGVufDB8MHx8fDE2OTMxNTg4MTJ8MA&ixlib=rb-4.0.3&q=80&w=1080',
      small:
        'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODkxOTN8MHwxfHNlYXJjaHwxfHxjaXR5fGVufDB8MHx8fDE2OTMxNTg4MTJ8MA&ixlib=rb-4.0.3&q=80&w=400',
      thumb:
        'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODkxOTN8MHwxfHNlYXJjaHwxfHxjaXR5fGVufDB8MHx8fDE2OTMxNTg4MTJ8MA&ixlib=rb-4.0.3&q=80&w=200',
      small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1477959858617-67f85cf4f1df',
    },
    links: {
      self: 'https://api.unsplash.com/photos/Nyvq2juw4_o',
      html: 'https://unsplash.com/photos/Nyvq2juw4_o',
      download:
        'https://unsplash.com/photos/Nyvq2juw4_o/download?ixid=M3w0ODkxOTN8MHwxfHNlYXJjaHwxfHxjaXR5fGVufDB8MHx8fDE2OTMxNTg4MTJ8MA',
      download_location:
        'https://api.unsplash.com/photos/Nyvq2juw4_o/download?ixid=M3w0ODkxOTN8MHwxfHNlYXJjaHwxfHxjaXR5fGVufDB8MHx8fDE2OTMxNTg4MTJ8MA',
    },
    likes: 3528,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: '1--L3vNK0TA',
      updated_at: '2023-08-26T04:08:00Z',
      username: 'peterlaster',
      name: 'Pedro Lastra',
      first_name: 'Pedro',
      last_name: 'Lastra',
      twitter_username: null,
      portfolio_url: 'https://www.flickr.com/photos/lastingimages/',
      bio: null,
      location: null,
      links: {
        self: 'https://api.unsplash.com/users/peterlaster',
        html: 'https://unsplash.com/@peterlaster',
        photos: 'https://api.unsplash.com/users/peterlaster/photos',
        likes: 'https://api.unsplash.com/users/peterlaster/likes',
        portfolio: 'https://api.unsplash.com/users/peterlaster/portfolio',
        following: 'https://api.unsplash.com/users/peterlaster/following',
        followers: 'https://api.unsplash.com/users/peterlaster/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
        medium:
          'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
        large:
          'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
      },
      instagram_username: null,
      total_collections: 10,
      total_likes: 46,
      total_photos: 86,
      accepted_tos: false,
      for_hire: false,
      social: {
        instagram_username: null,
        portfolio_url: 'https://www.flickr.com/photos/lastingimages/',
        twitter_username: null,
        paypal_email: null,
      },
    },
    tags: [
      {
        type: 'landing_page',
        title: 'city',
        source: {
          ancestry: {
            type: {
              slug: 'wallpapers',
              pretty_slug: 'HD Wallpapers',
            },
            category: {
              slug: 'travel',
              pretty_slug: 'Travel',
            },
            subcategory: {
              slug: 'city',
              pretty_slug: 'City',
            },
          },
          title: 'Hd city wallpapers',
          subtitle: 'Download free city wallpapers',
          description:
            'Choose from a curated selection of city wallpapers for your mobile and desktop screens. Always free on Unsplash.',
          meta_title: 'City Wallpapers: Free HD Download [500+ HQ] | Unsplash',
          meta_description:
            'Choose from hundreds of free city wallpapers. Download HD wallpapers for free on Unsplash.',
          cover_photo: {
            id: 'Nyvq2juw4_o',
            slug: 'Nyvq2juw4_o',
            created_at: '2016-11-01T00:26:28Z',
            updated_at: '2023-08-17T15:00:57Z',
            promoted_at: '2016-11-01T00:26:28Z',
            width: 3465,
            height: 2131,
            color: '#0c2640',
            blur_hash: 'LhEMa,W=WVWW_4kBjtW=?bkBaefR',
            description: 'City architecture and skyscrapers near waterfront',
            alt_description: 'white and brown city buildings during daytime',
            breadcrumbs: [],
            urls: {
              raw: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3',
              full: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
              regular:
                'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
              small:
                'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
              thumb:
                'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
              small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1477959858617-67f85cf4f1df',
            },
            links: {
              self: 'https://api.unsplash.com/photos/Nyvq2juw4_o',
              html: 'https://unsplash.com/photos/Nyvq2juw4_o',
              download: 'https://unsplash.com/photos/Nyvq2juw4_o/download',
              download_location: 'https://api.unsplash.com/photos/Nyvq2juw4_o/download',
            },
            likes: 3518,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {},
            premium: false,
            plus: false,
            user: {
              id: '1--L3vNK0TA',
              updated_at: '2023-08-17T20:40:15Z',
              username: 'peterlaster',
              name: 'Pedro Lastra',
              first_name: 'Pedro',
              last_name: 'Lastra',
              twitter_username: null,
              portfolio_url: 'https://www.flickr.com/photos/lastingimages/',
              bio: null,
              location: null,
              links: {
                self: 'https://api.unsplash.com/users/peterlaster',
                html: 'https://unsplash.com/@peterlaster',
                photos: 'https://api.unsplash.com/users/peterlaster/photos',
                likes: 'https://api.unsplash.com/users/peterlaster/likes',
                portfolio: 'https://api.unsplash.com/users/peterlaster/portfolio',
                following: 'https://api.unsplash.com/users/peterlaster/following',
                followers: 'https://api.unsplash.com/users/peterlaster/followers',
              },
              profile_image: {
                small:
                  'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
                medium:
                  'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
                large:
                  'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
              },
              instagram_username: null,
              total_collections: 10,
              total_likes: 46,
              total_photos: 86,
              accepted_tos: false,
              for_hire: false,
              social: {
                instagram_username: null,
                portfolio_url: 'https://www.flickr.com/photos/lastingimages/',
                twitter_username: null,
                paypal_email: null,
              },
            },
          },
        },
      },
      {
        type: 'search',
        title: 'building',
      },
      {
        type: 'landing_page',
        title: 'background',
        source: {
          ancestry: {
            type: {
              slug: 'backgrounds',
              pretty_slug: 'Backgrounds',
            },
          },
          title: 'Hq background images',
          subtitle: 'Download free backgrounds',
          description:
            'Browse our beautiful selection of free background images–all submitted by our community of talented contributors and completely free to download and use.',
          meta_title: 'Best 100+ Free Background Images [HD] | Download your next background photo on Unsplash',
          meta_description:
            'Download the perfect background images. Find over 100+ of the best free background images. Free for commercial use ✓ No attribution required ✓ Copyright-free ✓',
          cover_photo: {
            id: 'fMUIVein7Ng',
            slug: 'fMUIVein7Ng',
            created_at: '2017-05-15T23:49:10Z',
            updated_at: '2023-08-21T23:01:27Z',
            promoted_at: '2017-05-16T09:06:41Z',
            width: 3847,
            height: 5583,
            color: '#c0d9d9',
            blur_hash: 'LtJ@tjEyjFj[lov~Rja{-Cx]bbWC',
            description:
              'After getting many photos for a project, I am also trying to get images to share with the Unsplash community. Here’s an attempt at abstracting a detail of the amazing architecture of CCPV.',
            alt_description: 'closeup photo of black and red building',
            breadcrumbs: [],
            urls: {
              raw: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3',
              full: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
              regular:
                'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
              small:
                'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
              thumb:
                'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
              small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1494891848038-7bd202a2afeb',
            },
            links: {
              self: 'https://api.unsplash.com/photos/fMUIVein7Ng',
              html: 'https://unsplash.com/photos/fMUIVein7Ng',
              download: 'https://unsplash.com/photos/fMUIVein7Ng/download',
              download_location: 'https://api.unsplash.com/photos/fMUIVein7Ng/download',
            },
            likes: 1900,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {
              'architecture-interior': {
                status: 'approved',
                approved_on: '2020-04-06T14:20:14Z',
              },
              'color-of-water': {
                status: 'approved',
                approved_on: '2022-04-21T15:04:21Z',
              },
              wallpapers: {
                status: 'approved',
                approved_on: '2020-04-06T14:20:09Z',
              },
            },
            premium: false,
            plus: false,
            user: {
              id: 'hnq0aaqF_Qo',
              updated_at: '2023-08-14T15:46:22Z',
              username: 'scottwebb',
              name: 'Scott Webb',
              first_name: 'Scott',
              last_name: 'Webb',
              twitter_username: null,
              portfolio_url: 'https://scottwebb.me/',
              bio: "If you like my work and you'd like to support me, you can consider a donation 👉  http://www.paypal.me/scottrwebb | Donation goal for a new lens: $351.01 of $449 | Thank you Jay D. 🙏",
              location: 'London, Ontario, Canada',
              links: {
                self: 'https://api.unsplash.com/users/scottwebb',
                html: 'https://unsplash.com/@scottwebb',
                photos: 'https://api.unsplash.com/users/scottwebb/photos',
                likes: 'https://api.unsplash.com/users/scottwebb/likes',
                portfolio: 'https://api.unsplash.com/users/scottwebb/portfolio',
                following: 'https://api.unsplash.com/users/scottwebb/following',
                followers: 'https://api.unsplash.com/users/scottwebb/followers',
              },
              profile_image: {
                small:
                  'https://images.unsplash.com/profile-1598557047185-d94f7fc56f69image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
                medium:
                  'https://images.unsplash.com/profile-1598557047185-d94f7fc56f69image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
                large:
                  'https://images.unsplash.com/profile-1598557047185-d94f7fc56f69image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
              },
              instagram_username: 'scottwebb',
              total_collections: 46,
              total_likes: 4155,
              total_photos: 804,
              accepted_tos: true,
              for_hire: true,
              social: {
                instagram_username: 'scottwebb',
                portfolio_url: 'https://scottwebb.me/',
                twitter_username: null,
                paypal_email: null,
              },
            },
          },
        },
      },
    ],
  },
  {
    id: 'wpU4veNGnHg',
    slug: 'wpU4veNGnHg',
    created_at: '2016-12-02T21:36:41Z',
    updated_at: '2023-08-27T00:01:00Z',
    promoted_at: '2016-12-02T21:36:41Z',
    width: 5472,
    height: 3648,
    color: '#f3f3f3',
    blur_hash: 'L+H.QbofM|Rk~qofR*WBx^azoLoL',
    description: '7am shot',
    alt_description: 'high rise buildings city scape photography',
    breadcrumbs: [],
    urls: {
      raw: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixid=M3w0ODkxOTN8MHwxfHNlYXJjaHwyfHxjaXR5fGVufDB8MHx8fDE2OTMxNTg4MTJ8MA&ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0ODkxOTN8MHwxfHNlYXJjaHwyfHxjaXR5fGVufDB8MHx8fDE2OTMxNTg4MTJ8MA&ixlib=rb-4.0.3&q=85',
      regular:
        'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODkxOTN8MHwxfHNlYXJjaHwyfHxjaXR5fGVufDB8MHx8fDE2OTMxNTg4MTJ8MA&ixlib=rb-4.0.3&q=80&w=1080',
      small:
        'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODkxOTN8MHwxfHNlYXJjaHwyfHxjaXR5fGVufDB8MHx8fDE2OTMxNTg4MTJ8MA&ixlib=rb-4.0.3&q=80&w=400',
      thumb:
        'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODkxOTN8MHwxfHNlYXJjaHwyfHxjaXR5fGVufDB8MHx8fDE2OTMxNTg4MTJ8MA&ixlib=rb-4.0.3&q=80&w=200',
      small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1480714378408-67cf0d13bc1b',
    },
    links: {
      self: 'https://api.unsplash.com/photos/wpU4veNGnHg',
      html: 'https://unsplash.com/photos/wpU4veNGnHg',
      download:
        'https://unsplash.com/photos/wpU4veNGnHg/download?ixid=M3w0ODkxOTN8MHwxfHNlYXJjaHwyfHxjaXR5fGVufDB8MHx8fDE2OTMxNTg4MTJ8MA',
      download_location:
        'https://api.unsplash.com/photos/wpU4veNGnHg/download?ixid=M3w0ODkxOTN8MHwxfHNlYXJjaHwyfHxjaXR5fGVufDB8MHx8fDE2OTMxNTg4MTJ8MA',
    },
    likes: 2389,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: 'DE2lKLbSMug',
      updated_at: '2023-08-24T18:51:13Z',
      username: 'benobro',
      name: "ben o'bro",
      first_name: 'ben',
      last_name: "o'bro",
      twitter_username: null,
      portfolio_url: 'https://benobro.org/',
      bio: 'Simply sharing some cool pictures with the world.',
      location: 'GVA',
      links: {
        self: 'https://api.unsplash.com/users/benobro',
        html: 'https://unsplash.com/@benobro',
        photos: 'https://api.unsplash.com/users/benobro/photos',
        likes: 'https://api.unsplash.com/users/benobro/likes',
        portfolio: 'https://api.unsplash.com/users/benobro/portfolio',
        following: 'https://api.unsplash.com/users/benobro/following',
        followers: 'https://api.unsplash.com/users/benobro/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1668593294493-a159444c68eaimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
        medium:
          'https://images.unsplash.com/profile-1668593294493-a159444c68eaimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
        large:
          'https://images.unsplash.com/profile-1668593294493-a159444c68eaimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
      },
      instagram_username: 'benobro',
      total_collections: 0,
      total_likes: 70,
      total_photos: 16,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: 'benobro',
        portfolio_url: 'https://benobro.org/',
        twitter_username: null,
        paypal_email: null,
      },
    },
    tags: [
      {
        type: 'landing_page',
        title: 'city',
        source: {
          ancestry: {
            type: {
              slug: 'wallpapers',
              pretty_slug: 'HD Wallpapers',
            },
            category: {
              slug: 'travel',
              pretty_slug: 'Travel',
            },
            subcategory: {
              slug: 'city',
              pretty_slug: 'City',
            },
          },
          title: 'Hd city wallpapers',
          subtitle: 'Download free city wallpapers',
          description:
            'Choose from a curated selection of city wallpapers for your mobile and desktop screens. Always free on Unsplash.',
          meta_title: 'City Wallpapers: Free HD Download [500+ HQ] | Unsplash',
          meta_description:
            'Choose from hundreds of free city wallpapers. Download HD wallpapers for free on Unsplash.',
          cover_photo: {
            id: 'Nyvq2juw4_o',
            slug: 'Nyvq2juw4_o',
            created_at: '2016-11-01T00:26:28Z',
            updated_at: '2023-08-17T15:00:57Z',
            promoted_at: '2016-11-01T00:26:28Z',
            width: 3465,
            height: 2131,
            color: '#0c2640',
            blur_hash: 'LhEMa,W=WVWW_4kBjtW=?bkBaefR',
            description: 'City architecture and skyscrapers near waterfront',
            alt_description: 'white and brown city buildings during daytime',
            breadcrumbs: [],
            urls: {
              raw: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3',
              full: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
              regular:
                'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
              small:
                'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
              thumb:
                'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
              small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1477959858617-67f85cf4f1df',
            },
            links: {
              self: 'https://api.unsplash.com/photos/Nyvq2juw4_o',
              html: 'https://unsplash.com/photos/Nyvq2juw4_o',
              download: 'https://unsplash.com/photos/Nyvq2juw4_o/download',
              download_location: 'https://api.unsplash.com/photos/Nyvq2juw4_o/download',
            },
            likes: 3518,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {},
            premium: false,
            plus: false,
            user: {
              id: '1--L3vNK0TA',
              updated_at: '2023-08-17T20:40:15Z',
              username: 'peterlaster',
              name: 'Pedro Lastra',
              first_name: 'Pedro',
              last_name: 'Lastra',
              twitter_username: null,
              portfolio_url: 'https://www.flickr.com/photos/lastingimages/',
              bio: null,
              location: null,
              links: {
                self: 'https://api.unsplash.com/users/peterlaster',
                html: 'https://unsplash.com/@peterlaster',
                photos: 'https://api.unsplash.com/users/peterlaster/photos',
                likes: 'https://api.unsplash.com/users/peterlaster/likes',
                portfolio: 'https://api.unsplash.com/users/peterlaster/portfolio',
                following: 'https://api.unsplash.com/users/peterlaster/following',
                followers: 'https://api.unsplash.com/users/peterlaster/followers',
              },
              profile_image: {
                small:
                  'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
                medium:
                  'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
                large:
                  'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
              },
              instagram_username: null,
              total_collections: 10,
              total_likes: 46,
              total_photos: 86,
              accepted_tos: false,
              for_hire: false,
              social: {
                instagram_username: null,
                portfolio_url: 'https://www.flickr.com/photos/lastingimages/',
                twitter_username: null,
                paypal_email: null,
              },
            },
          },
        },
      },
      {
        type: 'search',
        title: 'building',
      },
      {
        type: 'landing_page',
        title: 'new york',
        source: {
          ancestry: {
            type: {
              slug: 'images',
              pretty_slug: 'Images',
            },
            category: {
              slug: 'travel',
              pretty_slug: 'Travel',
            },
            subcategory: {
              slug: 'new-york',
              pretty_slug: 'New York',
            },
          },
          title: 'New york pictures & images',
          subtitle: 'Download free new york images',
          description: 'Choose from a curated selection of New York photos. Always free on Unsplash.',
          meta_title: 'Beautiful New York Pictures | Download Free Images on Unsplash',
          meta_description:
            'Choose from hundreds of free New York pictures. Download HD New York photos for free on Unsplash.',
          cover_photo: {
            id: '2_sO3LQzrwk',
            slug: '2_sO3LQzrwk',
            created_at: '2018-04-20T17:09:07Z',
            updated_at: '2023-08-21T03:03:16Z',
            promoted_at: '2018-04-20T17:19:37Z',
            width: 3370,
            height: 5055,
            color: '#a6d9d9',
            blur_hash: 'LMIGo?R*IpflLMWCj?a}0LWVWDay',
            description: 'Oh, hey girl! 🗽🇺🇸',
            alt_description: 'Statue of Liberty, New York',
            breadcrumbs: [],
            urls: {
              raw: 'https://images.unsplash.com/photo-1524242109383-e349707a106b?ixlib=rb-4.0.3',
              full: 'https://images.unsplash.com/photo-1524242109383-e349707a106b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
              regular:
                'https://images.unsplash.com/photo-1524242109383-e349707a106b?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
              small:
                'https://images.unsplash.com/photo-1524242109383-e349707a106b?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
              thumb:
                'https://images.unsplash.com/photo-1524242109383-e349707a106b?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
              small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1524242109383-e349707a106b',
            },
            links: {
              self: 'https://api.unsplash.com/photos/2_sO3LQzrwk',
              html: 'https://unsplash.com/photos/2_sO3LQzrwk',
              download: 'https://unsplash.com/photos/2_sO3LQzrwk/download',
              download_location: 'https://api.unsplash.com/photos/2_sO3LQzrwk/download',
            },
            likes: 1245,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {
              blue: {
                status: 'approved',
                approved_on: '2023-07-31T17:31:58Z',
              },
            },
            premium: false,
            plus: false,
            user: {
              id: '1gCto1qU4Js',
              updated_at: '2023-08-03T23:32:24Z',
              username: 'dancalders',
              name: 'Dan Calderwood',
              first_name: 'Dan',
              last_name: 'Calderwood',
              twitter_username: 'dancalders',
              portfolio_url: 'https://www.instagram.com/dancalders/',
              bio: 'Street, travel and lifestyle photographer',
              location: 'New York',
              links: {
                self: 'https://api.unsplash.com/users/dancalders',
                html: 'https://unsplash.com/@dancalders',
                photos: 'https://api.unsplash.com/users/dancalders/photos',
                likes: 'https://api.unsplash.com/users/dancalders/likes',
                portfolio: 'https://api.unsplash.com/users/dancalders/portfolio',
                following: 'https://api.unsplash.com/users/dancalders/following',
                followers: 'https://api.unsplash.com/users/dancalders/followers',
              },
              profile_image: {
                small:
                  'https://images.unsplash.com/profile-1565446094302-cc17a4e5d099?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
                medium:
                  'https://images.unsplash.com/profile-1565446094302-cc17a4e5d099?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
                large:
                  'https://images.unsplash.com/profile-1565446094302-cc17a4e5d099?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
              },
              instagram_username: 'dancalders',
              total_collections: 3,
              total_likes: 317,
              total_photos: 43,
              accepted_tos: true,
              for_hire: false,
              social: {
                instagram_username: 'dancalders',
                portfolio_url: 'https://www.instagram.com/dancalders/',
                twitter_username: 'dancalders',
                paypal_email: null,
              },
            },
          },
        },
      },
    ],
  },
];

describe('Gallery компонент', () => {
  it('должен рендериться без ошибок', () => {
    const { container } = render(
      <Gallery setActive={() => {}} setId={() => {}} imageList={mockImageList} />
    );
    expect(container).toBeInTheDocument();
  });

  it('должен отображать изображения из imageList', () => {
    const { getByAltText } = render(
      <Gallery setActive={() => {}} setId={() => {}} imageList={mockImageList} />
    );

    const image1 = getByAltText('white and brown city buildings during daytime');
    const image2 = getByAltText('high rise buildings city scape photography');

    expect(image1).toBeInTheDocument();
    expect(image2).toBeInTheDocument();
  });
});
