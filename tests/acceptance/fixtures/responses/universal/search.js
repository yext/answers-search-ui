import { RequestMock } from 'testcafe';
import { CORSHeaders } from '../cors';
import { virginiaRes } from './virginiaRes';

const UniversalSearchResponse = {
  meta: {
    uuid: '0180235e-7fcd-5262-247b-d3537eea0002',
    errors: []
  },
  response: {
    businessId: 3350634,
    modules: [
      {
        verticalConfigId: 'people',
        resultsCount: 1,
        encodedState: '',
        results: [
          {
            data: {
              id: 'Employee-2116',
              type: 'ce_person',
              website: 'http://www.test.com',
              address: {
                line1: '7900 Westpark Drive',
                city: 'Mclean',
                region: 'VA',
                postalCode: '22102',
                countryCode: 'US'
              },
              associations: [
                'Runners Association'
              ],
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis nunc sed id semper risus. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Scelerisque viverra mauris in aliquam. A erat nam at lectus. Egestas purus viverra accumsan in nisl nisi scelerisque. Habitant morbi tristique senectus et netus. Congue nisi vitae suscipit tellus mauris a diam maecenas sed.',
              name: 'Amani Farooque',
              cityCoordinate: {
                latitude: 38.936519622802734,
                longitude: -77.18428039550781
              },
              c_allstateLadyCTA: {
                label: 'Learn More',
                linkType: 'URL',
                link: 'http://yext.com'
              },
              c_employeeCity: 'Tysons Corner',
              c_employeeCountry: 'United States',
              c_employeeDepartment: 'Consulting',
              c_employeeRegion: 'Virginia',
              c_employeeTitle: 'Associate Technical Project Manager',
              c_oliverCta: {
                url: 'https://www.yext.com/s/2287528/entity/edit2?entityIds=13411251',
                icon: 'yext',
                label: 'test cta'
              },
              c_startDate: '2017-09-18',
              displayCoordinate: {
                latitude: 38.924648,
                longitude: -77.216859
              },
              emails: [
                'afarooque@yext.com',
                'af@yext.com',
                'aplomb@yext.com'
              ],
              firstName: 'Amani',
              geocodedCoordinate: {
                latitude: 38.924654,
                longitude: -77.216891
              },
              headshot: {
                url: 'http://a.mktgcdn.com/p/bmc3W88h2mMRXk-wHQ7dB0Em4rR_dfia6OVrAK3LjYU/192x191.png',
                width: 192,
                height: 191,
                sourceUrl: 'http://a.mktgcdn.com/p/bmc3W88h2mMRXk-wHQ7dB0Em4rR_dfia6OVrAK3LjYU/192x191.png'
              },
              languages: [
                'German'
              ],
              lastName: 'Farooque',
              mainPhone: '+18003332222',
              routableCoordinate: {
                latitude: 38.9242966,
                longitude: -77.2177549
              },
              specialities: [
                'Documentation',
                'Coding'
              ],
              websiteUrl: {
                url: 'http://www.test.com',
                displayUrl: 'http://www.testdisplay.com',
                preferDisplayUrl: true
              },
              yextDisplayCoordinate: {
                latitude: 38.924648,
                longitude: -77.216859
              },
              yextRoutableCoordinate: {
                latitude: 38.9242966,
                longitude: -77.2177549
              },
              uid: '18716057'
            },
            highlightedFields: {},
            distance: 13123
          }
        ],
        appliedQueryFilters: [
          {
            displayKey: 'Name',
            displayValue: 'Amani Farooque',
            filter: {
              name: {
                $eq: 'Amani Farooque'
              }
            },
            type: 'FIELD_VALUE'
          }
        ],
        queryDurationMillis: 257,
        facets: [],
        source: 'KNOWLEDGE_MANAGER'
      },
      {
        verticalConfigId: 'faq',
        resultsCount: 8,
        encodedState: '',
        results: [
          {
            data: {
              id: 'faq-72',
              type: 'faq',
              answer: 'Scan your Roses\' Roses Card from the App on your phone, or swipe a Roses\' Roses Card that’s linked to your account. In a pinch, you can give your phone number that’s associated with your account, too.',
              question: 'How do I let you know I’m a Madsion Sandwiches MR™ Rewards member?',
              name: 'How do I let you know I’m a Madsion Sandwiches MR™ Rewards member?',
              c_NERTags: [
                'your',
                'Card',
                'from',
                'App',
                'on',
                'phone',
                'account.'
              ],
              uid: '18713955'
            },
            highlightedFields: {
              answer: {
                value: 'Scan your Roses\' Roses Card from the App on your phone, or swipe a Roses\' Roses Card that’s linked to your account. In a pinch, you can give your phone number that’s associated with your account, too.',
                matchedSubstrings: [
                  {
                    offset: 49,
                    length: 5
                  },
                  {
                    offset: 146,
                    length: 5
                  },
                  {
                    offset: 152,
                    length: 6
                  }
                ]
              }
            }
          },
          {
            data: {
              id: 'faq-99',
              type: 'faq',
              answer: 'Your Madsion Sandwiches Card is like your backstage pass. Scan it from the Madsion Sandwiches App or swipe the plastic Madsion Sandwiches Card at the register to redeem $2.00 Rewards or Surprise Rewards.Note: You cannot provide your mobile phone number associated with your account to redeem rewards.',
              question: 'How do I show you I’m a Madsion Sandwiches MR™ Rewards member and get my rewards?',
              name: 'How do I show you I’m a Madsion Sandwiches MR™ Rewards member and get my rewards?',
              c_NERTags: [
                'Madsion',
                'Sandwiches',
                'Card',
                'pass.',
                'the',
                'App',
                'plastic',
                'register',
                'redeem',
                '$2.00',
                'Rewards',
                'Surprise',
                'Rewards.Note:'
              ],
              uid: '18713939'
            },
            highlightedFields: {
              answer: {
                value: 'Your Madsion Sandwiches Card is like your backstage pass. Scan it from the Madsion Sandwiches App or swipe the plastic Madsion Sandwiches Card at the register to redeem $2.00 Rewards or Surprise Rewards.Note: You cannot provide your mobile phone number associated with your account to redeem rewards.',
                matchedSubstrings: [
                  {
                    offset: 240,
                    length: 5
                  },
                  {
                    offset: 246,
                    length: 6
                  }
                ]
              }
            }
          },
          {
            data: {
              id: 'faq-66',
              type: 'faq',
              answer: 'You get to keep all your tokens, as long as you make one earning Roses\' Roses purchase or redeem a reward at least once every 12 months. Just scan your Roses\' Roses Card or provide your phone number that’s associated with your account to earn tokens. If you don’t, your token balance will expire and reset to zero.',
              question: 'Will my token balance expire?',
              name: 'Will my token balance expire?',
              c_NERTags: [
                'tokens',
                'redeem',
                'reward',
                'Roses\'',
                'Card',
                'account',
                'token',
                'balance',
                'to',
                'zero.'
              ],
              uid: '18713936'
            },
            highlightedFields: {
              answer: {
                value: 'You get to keep all your tokens, as long as you make one earning Roses\' Roses purchase or redeem a reward at least once every 12 months. Just scan your Roses\' Roses Card or provide your phone number that’s associated with your account to earn tokens. If you don’t, your token balance will expire and reset to zero.',
                matchedSubstrings: [
                  {
                    offset: 186,
                    length: 5
                  },
                  {
                    offset: 192,
                    length: 6
                  }
                ]
              }
            }
          },
          {
            data: {
              id: 'faq-89',
              type: 'faq',
              answer: 'Any way you want! Sandwiches? Salads? COOKIES?! You can use the $2.00 Reward toward App, online, or in-restaurant purchases.If you’re using the Roses\' Roses App or website to order, you can apply any available $2.00 Rewards to your total bill.When making a purchase in a restaurant, select the rewards you want to use in your App, and scan your Roses\' Roses Card at the cash register or swipe your plastic Roses\' Roses Card.Note: you may not enter your phone number to redeem your $2.00 Reward.',
              question: 'How do I use my $2.00 Reward?',
              name: 'How do I use my $2.00 Reward?',
              uid: '18714059'
            },
            highlightedFields: {
              answer: {
                value: 'Any way you want! Sandwiches? Salads? COOKIES?! You can use the $2.00 Reward toward App, online, or in-restaurant purchases.If you’re using the Roses\' Roses App or website to order, you can apply any available $2.00 Rewards to your total bill.When making a purchase in a restaurant, select the rewards you want to use in your App, and scan your Roses\' Roses Card at the cash register or swipe your plastic Roses\' Roses Card.Note: you may not enter your phone number to redeem your $2.00 Reward.',
                matchedSubstrings: [
                  {
                    offset: 453,
                    length: 5
                  },
                  {
                    offset: 459,
                    length: 6
                  }
                ]
              }
            }
          },
          {
            data: {
              id: 'faq-91',
              type: 'faq',
              answer: 'We know, we know - you can barely stop smiling! Who doesn’t love a surprise? You can redeem a Surprise Reward through online, App, or in-person orders at a Roses\' Roses restaurant.Ordering on the go via the Roses\' Roses App or online: Apply any available Surprise Rewards to your order to get your surprise.At a Roses\' Roses Restaurant: Select the rewards you want to use and then scan your Roses\' Roses Card at the cash register or swipe your plastic Roses\' Roses Card.Note: you may not enter your phone number to redeem your Surprise Reward offer. You do not need to print out the Surprise Reward offer for redemption.',
              question: 'How do I use my Surprise Reward?',
              name: 'How do I use my Surprise Reward?',
              uid: '18714061'
            },
            highlightedFields: {
              answer: {
                value: 'We know, we know - you can barely stop smiling! Who doesn’t love a surprise? You can redeem a Surprise Reward through online, App, or in-person orders at a Roses\' Roses restaurant.Ordering on the go via the Roses\' Roses App or online: Apply any available Surprise Rewards to your order to get your surprise.At a Roses\' Roses Restaurant: Select the rewards you want to use and then scan your Roses\' Roses Card at the cash register or swipe your plastic Roses\' Roses Card.Note: you may not enter your phone number to redeem your Surprise Reward offer. You do not need to print out the Surprise Reward offer for redemption.',
                matchedSubstrings: [
                  {
                    offset: 499,
                    length: 5
                  },
                  {
                    offset: 505,
                    length: 6
                  }
                ]
              }
            }
          },
          {
            data: {
              id: 'faq-100',
              type: 'faq',
              answer: 'You have 90 days to use your $2.00 Reward once it has been issued to you. If it is not used after 90 days, the reward will expire and you will not be able to use it.Note: Remember, your tokens don\'t expire, as long as you make one earning Madsion Sandwiches purchase or redeem a reward at least once every 12 months. Just scan your Madsion Sandwiches Card or provide your phone number to earn tokens. If you don\'t, your token balance will expire and reset to zero. The more you swipe, the more tokens you\'ll have which will earn you more rewards, so keep spending!',
              question: 'I earned a $2.00 Reward! When will it expire?',
              name: 'I earned a $2.00 Reward! When will it expire?',
              uid: '18714077'
            },
            highlightedFields: {
              answer: {
                value: 'You have 90 days to use your $2.00 Reward once it has been issued to you. If it is not used after 90 days, the reward will expire and you will not be able to use it.Note: Remember, your tokens don\'t expire, as long as you make one earning Madsion Sandwiches purchase or redeem a reward at least once every 12 months. Just scan your Madsion Sandwiches Card or provide your phone number to earn tokens. If you don\'t, your token balance will expire and reset to zero. The more you swipe, the more tokens you\'ll have which will earn you more rewards, so keep spending!',
                matchedSubstrings: [
                  {
                    offset: 372,
                    length: 5
                  },
                  {
                    offset: 378,
                    length: 6
                  }
                ]
              }
            }
          },
          {
            data: {
              id: 'faq-76',
              type: 'faq',
              answer: 'Our rewards are deliciously delightful! Earn 4 tokens for every dollar* you spend on food and beverage purchases in Madsion Sandwiches restaurants. Once you hit 200 tokens - BOOM! - you earn a $2.00 Reward for a future Madsion Sandwiches purchase. Easy, right? But wait, there\'s more! We want to keep you on your toes, so be on the lookout for Surprise Rewards.Earn tokens a variety of ways. You\'ll earn when you order on the go or in-person. When ordering at a restaurant in person, you will earn tokens if you identify yourself in one of three ways listed below:Scan your digital Madsion Sandwiches Card (with your Madsion Sandwiches App)Swipe a registered plastic Madsion Sandwiches CardProvide your phone number at Madsion Sandwiches restaurants*Excluding gift card and Catering Call Center purchases.',
              question: 'What are the benefits of joining Madsion Sandwiches MR™ Rewards?',
              name: 'What are the benefits of joining Madsion Sandwiches MR™ Rewards?',
              uid: '18714040'
            },
            highlightedFields: {
              answer: {
                value: 'Our rewards are deliciously delightful! Earn 4 tokens for every dollar* you spend on food and beverage purchases in Madsion Sandwiches restaurants. Once you hit 200 tokens - BOOM! - you earn a $2.00 Reward for a future Madsion Sandwiches purchase. Easy, right? But wait, there\'s more! We want to keep you on your toes, so be on the lookout for Surprise Rewards.Earn tokens a variety of ways. You\'ll earn when you order on the go or in-person. When ordering at a restaurant in person, you will earn tokens if you identify yourself in one of three ways listed below:Scan your digital Madsion Sandwiches Card (with your Madsion Sandwiches App)Swipe a registered plastic Madsion Sandwiches CardProvide your phone number at Madsion Sandwiches restaurants*Excluding gift card and Catering Call Center purchases.',
                matchedSubstrings: [
                  {
                    offset: 703,
                    length: 5
                  },
                  {
                    offset: 709,
                    length: 6
                  }
                ]
              }
            }
          },
          {
            data: {
              id: '1074283123523689994',
              type: 'faq',
              answer: 'Great question! To start, you can **bold,** *italicize,* and ++underline.++ You can also create two types of lists:  \nso much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text\n\n\n\nso much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text\n\n\n\n**Bulleted Lists**\n\n\n\n* These typically have bullets\n* These are represented by \\\u003cul\\\u003e in the HTML, standing for unordered list\n* so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text\n\n\n\nso much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text  \nso much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text\n\n\n\n**Numbered Lists**\n\n\n\n1. These have numbers next to each item\n2. These are represented by \\\u003col\\\u003e in the HTML, standing for ordered list\n3. so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text\n\n\n\nso much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text  \nYou an also add links!\n\n\n\n1. [This is a regular link](https://google.com/)\n2. [This is an email link](mailto:afarooque@yext.com)\n3. And this is a phone link \\- [Call Now](tel:+18004402000)\n4. so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text\n\n\n\nso much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much textso much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text  \nso much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text\n\n\n\nso much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text\n\n\n\n* These typically have bullets\n* These are represented by \\\u003cul\\\u003e in the HTML, standing for unordered list\n* so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text\n\n\n\n1. These typically have bullets\n2. These are represented by \\\u003cul\\\u003e in the HTML, standing for unordered list\n3. so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text so much text',
              question: 'Amani loves FAQs',
              name: 'Amani loves FAQs',
              uid: '18714028'
            },
            highlightedFields: {
              name: {
                value: 'Amani loves FAQs',
                matchedSubstrings: [
                  {
                    offset: 0,
                    length: 5
                  }
                ]
              }
            }
          }
        ],
        appliedQueryFilters: [],
        queryDurationMillis: 297,
        facets: [],
        source: 'KNOWLEDGE_MANAGER'
      }
    ],
    failedVerticals: [],
    queryId: '0180235e-7fe7-6f95-65f6-b41cb1c5b543',
    directAnswer: {
      type: 'FIELD_VALUE',
      answer: {
        entityName: 'Amani Farooque',
        fieldName: 'Phone Number',
        fieldApiName: 'mainPhone',
        value: '+18003332222',
        fieldType: 'phone'
      },
      relatedItem: {
        verticalConfigId: 'people',
        data: {
          id: 'Employee-2116',
          type: 'ce_person',
          website: 'http://www.test.com',
          fieldValues: {
            address: {
              line1: '7900 Westpark Drive',
              city: 'Mclean',
              region: 'VA',
              postalCode: '22102',
              countryCode: 'US'
            },
            associations: [
              'Runners Association'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis nunc sed id semper risus. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Scelerisque viverra mauris in aliquam. A erat nam at lectus. Egestas purus viverra accumsan in nisl nisi scelerisque. Habitant morbi tristique senectus et netus. Congue nisi vitae suscipit tellus mauris a diam maecenas sed.',
            name: 'Amani Farooque',
            cityCoordinate: {
              latitude: 38.936519622802734,
              longitude: -77.18428039550781
            },
            c_allstateLadyCTA: {
              label: 'Learn More',
              linkType: 'URL',
              link: 'http://yext.com'
            },
            c_employeeCity: 'Tysons Corner',
            c_employeeCountry: 'United States',
            c_employeeDepartment: 'Consulting',
            c_employeeRegion: 'Virginia',
            c_employeeTitle: 'Associate Technical Project Manager',
            c_oliverCta: {
              url: 'https://www.yext.com/s/2287528/entity/edit2?entityIds=13411251',
              icon: 'yext',
              label: 'test cta'
            },
            c_startDate: '2017-09-18',
            displayCoordinate: {
              latitude: 38.924648,
              longitude: -77.216859
            },
            emails: [
              'afarooque@yext.com',
              'af@yext.com',
              'aplomb@yext.com'
            ],
            firstName: 'Amani',
            geocodedCoordinate: {
              latitude: 38.924654,
              longitude: -77.216891
            },
            headshot: {
              url: 'http://a.mktgcdn.com/p/bmc3W88h2mMRXk-wHQ7dB0Em4rR_dfia6OVrAK3LjYU/192x191.png',
              width: 192,
              height: 191,
              sourceUrl: 'http://a.mktgcdn.com/p/bmc3W88h2mMRXk-wHQ7dB0Em4rR_dfia6OVrAK3LjYU/192x191.png'
            },
            languages: [
              'German'
            ],
            lastName: 'Farooque',
            mainPhone: '+18003332222',
            routableCoordinate: {
              latitude: 38.9242966,
              longitude: -77.2177549
            },
            specialities: [
              'Documentation',
              'Coding'
            ],
            websiteUrl: {
              url: 'http://www.test.com',
              displayUrl: 'http://www.testdisplay.com',
              preferDisplayUrl: true
            },
            yextDisplayCoordinate: {
              latitude: 38.924648,
              longitude: -77.216859
            },
            yextRoutableCoordinate: {
              latitude: 38.9242966,
              longitude: -77.2177549
            }
          },
          uid: '18716057'
        }
      }
    },
    searchIntents: [],
    locationBias: {
      latitude: 38.8769,
      longitude: -77.0893,
      locationDisplayName: 'Arlington County, Virginia, United States',
      accuracy: 'DEVICE'
    }
  }
};

function generateUniversalSearchResponse (input) {
  if (input === 'virginia') {
    return virginiaRes;
  } else {
    return UniversalSearchResponse;
  }
}

export const MockedUniversalSearchRequest = RequestMock()
  .onRequestTo(async request => {
    const urlRegex = /^https:\/\/prod-cdn.us.yextapis.com\/v2\/accounts\/me\/search\/query/;
    return urlRegex.test(request.url) && request.method === 'get';
  })
  .respond((req, res) => {
    const parsedUrl = new URL(req.url);

    res.body = JSON.stringify(generateUniversalSearchResponse(
      parsedUrl.searchParams.get('input')
    ));
    res.headers = CORSHeaders;
    res.statusCode = 200;
  });
