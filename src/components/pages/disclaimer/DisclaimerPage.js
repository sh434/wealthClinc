import "./disclaimerPage.css";

const DisclaimerPage = () => {
  return (
    <section className="container">
      <div className="disclaimerContent">
        <ul>
          <p>
            Any person logging into or using the site (“the Visitor”) has
            unconditionally accepted the terms and conditions of use and these
            constitute a binding and enforceable agreement between the visitor
            and the Wealth Clinic Pvt. Ltd.
          </p>

          <li>
            All information and materials on this website are provided on an “AS
            IS” basis and prepared for general guidance only, without warranties
            of any kind, either expressed or implied as to its completeness,
            accuracy, reliability, suitability, or availability.
            Accessing/visiting this website does not constitute an offer and/or
            contract of any type between Wealth Clinic Pvt. Ltd. and the
            viewer/recipient. All transactions shall be subject to the terms and
            conditions of the Agreement for Sale to be entered into between
            Wealth Clinic Pvt. Ltd. and the intending party.
          </li>

          <li>
            The website may contain links to other websites. These links are
            provided only for convenience and information. Wealth Clinic Pvt Ltd
            has no control over the content or the availability of Linked
            Websites and has not reviewed the information on the Linked
            Websites. Wealth Clinic Pvt Ltd. shall not be responsible or liable
            for any aspect of the Linked Websites including the content therein.
          </li>

          <li>
            The website terms and conditions shall be governed by the laws of
            India and the courts in Uttar Pradesh shall have exclusive
            jurisdiction in respect of any matter or dispute arising out of or
            in respect of the website terms and conditions.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DisclaimerPage;
