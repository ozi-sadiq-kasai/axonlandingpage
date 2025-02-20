import styled from "styled-components";

const PrivacyPolicy = () => {
  return (
    <Wrapper>
      <h2>Privacy Policy for Axonlink Limited</h2>
      <EffectiveDate>Effective Date: 7th February 2025</EffectiveDate>
      <Content>
        <p>
          Axonlink Limited is committed to protecting the privacy of your
          information. This Privacy Policy explains how we collect, use, and
          share your personal information when you visit our website [Your
          Website Address] (the "Site") or use our platform (the "Platform").
        </p>
        <Section>
          <h4>Information We Collect:</h4>
          <p>
            We collect several types of information from and about users of our
            Site and Platform, including personal Information. This may include
            information that can be used to identify you, such as your name,
            email address, location (city, state/province, country), and any
            other information you choose to provide. If you are a healthcare
            professional or researcher, this may also include your role and
            affiliation.
          </p>
          <ul>
            <li>
              <strong>Usage Information:</strong> This includes information
              about how you use our Site and Platform, such as the pages you
              visit, the links you click, the time you spend on each page, and
              other usage data.
            </li>
            <li>
              <strong>Device Information:</strong> We may collect information
              about the device you use to access our Site and Platform, including
              your IP address, browser type, operating system, and device
              identifiers.
            </li>
            <li>
              <strong>Information from Questionnaires and Forms:</strong> When
              you fill out questionnaires, waiting lists, or other forms on our
              Site or Platform, we collect the information you provide.
            </li>
            <li>
              <strong>Cookies and Similar Technologies:</strong> We may use
              cookies, web beacons, and other tracking technologies to collect
              information about your activity on our Site and Platform. You can
              control cookies through your browser settings, but disabling
              cookies may affect the functionality of our Site and Platform.
            </li>
          </ul>
        </Section>
        <Section>
          <h4>How We Use Your Information:</h4>
          <p>
            We may use your information for the following purposes:
          </p>
          <ul>
            <li>
              <strong>Providing and Improving the Platform:</strong> To operate,
              maintain, and improve our Site and Platform, personalize your
              experience, and provide customer support.
            </li>
            <li>
              <strong>Connecting Patients and Researchers:</strong> To
              facilitate the matching of individuals with relevant clinical
              trials and to provide researchers with the tools they need to
              manage their trials.
            </li>
            <li>
              <strong>Communication:</strong> To contact you with updates,
              newsletters, marketing materials, and other information related to
              our Site and Platform. You can opt out of receiving marketing
              communications at any time.
            </li>
            <li>
              <strong>Research and Analysis:</strong> To analyze usage trends,
              conduct research, and improve our understanding of user needs.
            </li>
            <li>
              <strong>Legal Compliance:</strong> To comply with applicable laws
              and regulations.
            </li>
          </ul>
        </Section>
        <Section>
          <h4>How We Share Your Information:</h4>
          <p>
            We may share your information with the following third parties:
          </p>
          <ul>
            <li>
              <strong>Researchers and Clinical Trial Organizations:</strong> If
              you express interest in participating in a clinical trial, we will
              share your information with the relevant researchers or
              organizations.
            </li>
            <li>
              <strong>Service Providers:</strong> We may share your information
              with third-party service providers who assist us with website
              hosting, data analytics, email delivery, and other services. We
              require these service providers to protect your information.
            </li>
            <li>
              <strong>Legal Authorities:</strong> We may disclose your
              information to legal authorities if required by law or legal
              process.
            </li>
            <li>
              <strong>Business Transfers:</strong> If we are involved in a
              merger, acquisition, or sale of all or a portion of our assets,
              your information may be transferred as part of that transaction.
            </li>
          </ul>
        </Section>
        <Section>
          <h4>Your Choices:</h4>
          <ul>
            <li>
              <strong>Access and Correction:</strong> You may have the right to
              access and correct your personal information. You can do so by
              contacting us at [Your Contact Email Address].
            </li>
            <li>
              <strong>Marketing Communications:</strong> You can opt out of
              receiving marketing communications from us by following the
              unsubscribe instructions in our emails or by contacting us
              directly.
            </li>
            <li>
              <strong>Cookies:</strong> You can control cookies through your
              browser settings.
            </li>
          </ul>
        </Section>
        <Section>
          <h4>Data Security:</h4>
          <p>
            We take reasonable measures to protect your information from
            unauthorized access, use, or disclosure. However, no method of
            transmission over the Internet, or method of electronic storage, is
            100% secure.
          </p>
        </Section>
        <Section>
          <h4>Children's Privacy:</h4>
          <p>
            Our Site and Platform are not intended for users under the age of
            18. We do not knowingly collect personal information from persons
            under 18.
          </p>
        </Section>
        <Section>
          <h4>Changes to this Privacy Policy:</h4>
          <p>
            We may update this Privacy Policy from time to time. We will post any
            changes on this page and notify you as required by law.
          </p>
        </Section>
        <Section>
          <h4>Contact Us:</h4>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at: Axonlink Limited, axonlinklimited@gmail.com
          </p>
        </Section>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8rem 2.5rem;
  background-color: #f9f9f9;
  color: #333;
  font-family: Arial, sans-serif;
  line-height: 1.6;
`;

const EffectiveDate = styled.span`
  display: block;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: #666;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.div`
  margin-bottom: 2rem;

  h4 {
    margin-bottom: 1rem;
    color: #444;
    font-size: 1.2rem;
  }

  p {
    margin-bottom: 1rem;
  }

  ul {
    margin-left: 1.5rem;
    margin-bottom: 1rem;

    li {
      margin-bottom: 0.5rem;
    }
  }
`;

export default PrivacyPolicy;