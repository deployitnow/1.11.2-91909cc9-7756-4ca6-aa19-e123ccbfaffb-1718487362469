import { Button } from '@/components/shared/ui/button';
import Header from '@/components/shared/Header';
import { LandingPrimaryTextCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LandingProductHuntAward } from '@/components/landing/social-proof/LandingProductHuntAward';
import { LandingSocialProof } from '@/components/landing/social-proof/LandingSocialProof';
import { LandingDiscount } from '@/components/landing/discount/LandingDiscount';
import { ComponentDemo } from 'demo/demo';
import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';
import { LandingSaleCtaSection } from '@/components/landing/cta/LandingSaleCta';
import { LandingTestimonialGrid } from '@/components/landing/testimonial/LandingTestimonialGrid';
import { LandingBandSection } from '@/components/landing/LandingBand';
import { LandingTestimonialReadMoreWrapper } from '@/components/landing/testimonial/LandingTestimonialReadMoreWrapper';
import { LandingFeatureList } from '@/components/landing/feature/LandingFeatureList';
import { LandingFaqCollapsibleSection } from '@/components/landing/LandingFaqCollapsible';
import { LandingSocialProofBand } from '@/components/landing/social-proof/LandingSocialProofBand';
import { LandingSocialProofBandItem } from '@/components/landing/social-proof/LandingSocialProofBandItem';

import {
  ChromeIcon,
  FigmaIcon,
  FramerIcon,
  GithubIcon,
  LayersIcon,
  LightbulbIcon,
  LineChartIcon,
  SparklesIcon,
  ThumbsUpIcon,
  ZapIcon,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center fancy-overlay">
      <LandingSocialProofBand invert={false} className="hidden md:flex">
        <LandingSocialProofBandItem>
          Fast, reliable, and secure
        </LandingSocialProofBandItem>

        <LandingSocialProofBandItem>
          Easy to use, easy to love
        </LandingSocialProofBandItem>

        <LandingSocialProofBandItem graphic="rating">
          99% customer satisfaction
        </LandingSocialProofBandItem>
      </LandingSocialProofBand>

      <Header className="mb-0 lg:mb-0" />

      <LandingPrimaryTextCtaSection
        title="Thalione"
        description="Delivering best-in-class digital solutions for local eateries"
        textPosition="left"
        withBackground
        leadingComponent={<LandingProductHuntAward />}
      >
        <Button size="xl" asChild>
          <a href="/about">Learn More</a>
        </Button>

        <LandingDiscount
          discountValueText="30% off"
          discountDescriptionText="for the first 10 customers (2 left)"
        />

        <LandingSocialProof
          className="w-full mt-12"
          showRating
          numberOfUsers={99}
          suffixText="happy users"
          avatarItems={[
            {
              imageSrc: 'https://picsum.photos/id/64/100/100',
              name: 'John Doe',
            },
            {
              imageSrc: 'https://picsum.photos/id/65/100/100',
              name: 'Jane Doe',
            },
            {
              imageSrc: 'https://picsum.photos/id/669/100/100',
              name: 'Alice Doe',
            },
          ]}
        />
      </LandingPrimaryTextCtaSection>

      <LandingProductFeature
        title="Premium Services"
        descriptionComponent={
          <>
            <LandingProductFeatureKeyPoints
              keyPoints={[
                {
                  title: 'User-Friendly Interface',
                  description:
                    'A sleek, intuitive interface designed to complement the dining experience, making online ordering a joy, not a chore.',
                },
                {
                  title: 'Menu Digitization',
                  description:
                    'We translate your menu into an appealing, easy-to-navigate digital format that enhances its allure and accessibility.',
                },
                {
                  title: 'Order Management System',
                  description:
                    'Thalione manages incoming orders in real time ensuring your kitchen keeps pace even during busy hours.',
                },
              ]}
            />

            <Button asChild>
              <a href="/about">Learn More</a>
            </Button>

            <p className="text-sm">
              7 day free trial, no credit card required.
            </p>
          </>
        }
        imageSrc="/static/images/backdrop-19.webp"
        imageAlt="Screenshot of the product"
        imagePosition="left"
        imagePerspective="none"
      />

      <LandingProductFeature
        title="Rapid Ordering"
        descriptionComponent={
          <>
            <p>
              We understand how critical time is for both businesses and
              customers. Our rapid ordering feature ensures seamless
              transactions, allowing customers to easily select their meals,
              customize as they wish and checkout in just a few clicks.
            </p>

            <LandingProductFeatureKeyPoints
              keyPoints={[
                {
                  title: 'Payment Integration',
                  description:
                    'Our platform integrates seamlessly with popular payment gateways, providing a fast, secure transaction experience.',
                },
                {
                  title: 'Customer Insight Relations',
                  description:
                    'We provide actionable insights on customer preferences to help personalize your offerings and amplify their engagement.',
                },
                {
                  title: 'Social Media Sync',
                  description:
                    'Sync and showcase your specials, reviews and ratings across multiple social media channels to enhance your digital footprint.',
                },
              ]}
            />

            <Button asChild>
              <a href="/about">Learn More</a>
            </Button>

            <p className="text-sm">Get started with our free tier.</p>
          </>
        }
        imageSrc="/static/images/backdrop-20.webp"
        imageAlt="Screenshot of the product"
        imagePosition="right"
        imagePerspective="none"
        withBackground
        withBackgroundGlow
        variant="secondary"
        backgroundGlowVariant="secondary"
      />

      <LandingProductFeature
        title="Easy Integration"
        descriptionComponent={
          <>
            <p>
              With Thalione, you don't need to be a tech expert to get your
              online presence up and running. Our solution integrates seamlessly
              with your current system, making the transition to digital as
              smooth as possible. Plus, our dedicated support team is just a
              call away if you need any help.
            </p>

            <Button asChild>
              <a href="/about">Learn More</a>
            </Button>

            <p className="text-sm">First month is on us.</p>
          </>
        }
        imageSrc="/static/images/backdrop-5.webp"
        imageAlt="Screenshot of the product"
        imagePosition="left"
        imagePerspective="none"
        variant="secondary"
      />

      <LandingBandSection
        title="4.9/5 stars"
        description="Our customers love our product."
        supportingComponent={
          <LandingSocialProof
            showRating
            numberOfUsers={99}
            avatarItems={[
              {
                imageSrc: 'https://picsum.photos/id/64/100/100',
                name: 'John Doe',
              },
              {
                imageSrc: 'https://picsum.photos/id/65/100/100',
                name: 'Jane Doe',
              },
              {
                imageSrc: 'https://picsum.photos/id/669/100/100',
                name: 'Alice Doe',
              },
            ]}
          />
        }
      />

      <LandingProductFeature
        title="Savor Local"
        descriptionComponent={
          <>
            Discover new tastes and enjoy your long-time favorites.
            <Button asChild>
              <a href="/about">Learn More</a>
            </Button>
          </>
        }
        withBackground
        variant="secondary"
        imageSrc="/static/images/product-sample.webp"
        imageAlt="Screenshot of the product"
        imagePosition="center"
        textPosition="center"
      />

      <LandingSaleCtaSection
        title="Join Thalione"
        description="Take this opportunity to take your local eatery to the next level. With Thalione, enjoy the power of digital technology at your fingertips and see how easy it is to deliver a top-notch dining experience, both in-person and online."
        ctaHref={'#'}
        ctaLabel={'Pre-order now'}
        withBackgroundGlow
      />

      <LandingTestimonialReadMoreWrapper size="md">
        <LandingTestimonialGrid
          title="What People are Saying About Thalione"
          description="Discover how Thalione becomes the lifeline for an array of local eateries across the city, enabling them to thrive in the digital space."
          testimonialItems={[
            {
              name: 'Maria, The Corner Cafè',
              text: 'Ever since we collaborated with Thalione, my resto-café gained more local brunch lovers than ever before!',
              handle: '@maria,_the corner cafè',
              imageSrc: 'https://picsum.photos/id/64/100/100',
            },
            {
              name: "Joey, Joey's Pizzeria",
              text: 'Our pizza delivery orders skyrocketed after Thalione streamlined our online ordering system.',
              handle: "@joey,_joey's pizzeria",
              imageSrc: 'https://picsum.photos/id/65/100/100',
            },
            {
              name: "Sophie, Sophie's Seafood Shack",
              text: 'Thanks to Thalione, we were able to showcase our specials and connect digitally with all our loyal customers.',
              handle: "@sophie,_sophie's seafood shack",
              imageSrc: 'https://picsum.photos/id/669/100/100',
              featured: true,
            },
            {
              name: "Peter, Peter's Pancake House",
              text: 'Offering online table reservations has never been so easy, Cheers to the Thalione team!',
              handle: "@peter,_peter's pancake house",
              imageSrc: 'https://picsum.photos/id/829/100/100',
            },
            {
              name: "Margaret, Marge's Diner",
              text: "Thalione made our digital transition smooth, seamless, and cost-effective. It's a game-changer for us.",
              handle: "@margaret,_marge's diner",
              imageSrc: 'https://picsum.photos/100/100.webp?random=2',
            },
            {
              name: "Harry, Harry's Deli",
              text: "Our business grew exponentially with Thalione's innovative digital solutions tailored for our deli.",
              handle: "@harry,_harry's deli",
              imageSrc: 'https://picsum.photos/100/100.webp?random=3',
            },
          ]}
          withBackgroundGlow
          withBackground
        />
      </LandingTestimonialReadMoreWrapper>

      <LandingFeatureList
        title="Thalione: Your Digital Gateway to Local Culinary Experiences"
        description="We build cutting-edge digital platforms that connect local eateries to food enthusiasts, amplifying their reach and potential in the digital sphere. Through Thalione, we serve up success on your terms."
        featureItems={[
          {
            title: 'User-Friendly Interface',
            description:
              'A sleek, intuitive interface designed to complement the dining experience, making online ordering a joy, not a chore.',
            icon: <LayersIcon />,
          },
          {
            title: 'Menu Digitization',
            description:
              'We translate your menu into an appealing, easy-to-navigate digital format that enhances its allure and accessibility.',
            icon: <LineChartIcon />,
          },
          {
            title: 'Order Management System',
            description:
              'Thalione manages incoming orders in real time ensuring your kitchen keeps pace even during busy hours.',
            icon: <SparklesIcon />,
          },
          {
            title: 'Payment Integration',
            description:
              'Our platform integrates seamlessly with popular payment gateways, providing a fast, secure transaction experience.',
            icon: <LightbulbIcon />,
          },
          {
            title: 'Customer Insight Relations',
            description:
              'We provide actionable insights on customer preferences to help personalize your offerings and amplify their engagement.',
            icon: <ZapIcon />,
          },
          {
            title: 'Social Media Sync',
            description:
              'Sync and showcase your specials, reviews and ratings across multiple social media channels to enhance your digital footprint.',
            icon: <ThumbsUpIcon />,
          },
          {
            title: 'Pickup and Delivery Options',
            description:
              "Thalione supports curbside pickups and delivery workflows to cater for today's on-the-go customers.",
            icon: <ChromeIcon />,
          },
          {
            title: 'Tech Support',
            description:
              'Our top-tier tech support is available around the clock, ensuring your restaurant never skips a beat in the digital world.',
            icon: <FigmaIcon />,
          },
          {
            title: 'Loyal Customer Rewards',
            description:
              'We help build loyal clientele by enabling reward programs, putting your grateful patrons on a journey to more delightful indulgences.',
            icon: <FramerIcon />,
          },
        ]}
      />

      <LandingFaqCollapsibleSection
        title="Frequently Asked Questions about Thalione"
        description="An insight to understanding our valuable, state-of-the-art digital solutions for your local eateries."
        faqItems={[
          {
            question: 'What makes Thalione stand apart from the crowd?',
            answer:
              'Thalione is a high-caliber, premier service specifically designed for local eateries, merging your traditional business model with the digital era. Our peerless digital solutions serve in filling the key gaps of your existing framework, transforming your eatery into a flourishing, customer-attracting magnet.',
          },
          {
            question: 'What tangible benefits can Thalione offer me?',
            answer:
              'Our streamlined solutions include custom website development, mobile app creation, and strategic online marketing to increase your digital reach. With Thalione, you’ll have a robust online presence, attract more customers, refine your operations and ultimately, significantly increase your revenue.',
          },
          {
            question: 'Why should I consider investing in Thalione?',
            answer:
              "Your investment in Thalione boosts not only your brand's digital visibility but can also result in increased foot-traffic to your physical location. Enhance your services, engage a wider audience, and start experiencing the transformation of your local eatery into a widely recognized culinary spot.",
          },
        ]}
        withBackground
      />

      <div className="w-full flex flex-col items-center gap-8 md:gap-16">
        <section className="ultrawide-container">
          <ComponentDemo />
        </section>
      </div>
    </div>
  );
}
