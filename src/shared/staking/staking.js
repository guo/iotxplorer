import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { assetURL } from "../../lib/asset-url";
import { t } from "../../lib/iso-i18n";
import { STAKING_DASHBOARD, SITE_URL } from "../common/site-url";

// TODO: Impletment mailing list at bottom of page. Convert appropriate strings below into translatables.

export class Staking extends Component {
  render() {
    return (
      <section>
        <section className='hero is-primary is-large is-bold'>
          <Helmet
            title={"Iotxplorer: Stake with us <3"}
            meta={[
              {
                name: "description",
                content:
                  "Add value to the IoTeX network whilst adding to your wallet. Learn how and why you should vote for iotxplorer."
              },
              {
                property: "og:title",
                content: "Iotxplorer: Stake with us <3"
              },
              {
                property: "og:description",
                content:
                  "Add value to the IoTeX network whilst adding to your wallet. Learn how and why you should vote for iotxplorer."
              },
              {
                property: "og:image",
                content: `${assetURL("/staking-meta-image.png")}`
              },
              {
                name: "twitter:card",
                content: "summary_large_image"
              },
              {
                name: "twitter:site",
                content: "@iotxplorer"
              },
              {
                name: "twitter:title",
                content: "Iotxplorer: Stake with us <3"
              },
              {
                name: "twitter:description",
                content:
                  "Add value to the IoTeX network whilst adding to your wallet. Learn how and why you should vote for iotxplorer."
              },
              {
                name: "twitter:image",
                content: `${assetURL("/staking-meta-img.png")}`
              }
            ]}
          />
          <div className='columns' style={{ marginBottom: "0px" }}>
            <div className='column is-two-fifths staking-bg-image' />
            <div className='column staking-spacing'>
              <h1 className='title'>Always add value.</h1>
              <h2 className='subtitle'>
                Add value to the IoTeX network whilst adding to your wallet.
                Stake with iotxplorer.
              </h2>

              <form
                action='//iotxplorer.us20.list-manage.com/subscribe/post?u=6e080e4562ed541d1f6636917&amp;id=01b0eb8ba6'
                method='post'
                id='mc-embedded-subscribe-form'
                name='mc-embedded-subscribe-form'
                className='validate'
                target='_blank'
                noValidate={false}
              >
                <p className='control has-icons-left'>
                  <input
                    type='email'
                    className='input'
                    aria-label='Email'
                    id='mce-EMAIL'
                    name='EMAIL'
                    placeholder='Trust us, you want to be subscribed.'
                    required={true}
                    style={{ width: "400px" }}
                  />
                  <span className='icon is-small is-left'>
                    <i className='fas fa-envelope' />
                  </span>
                </p>
                <input
                  type='hidden'
                  name='b_6e080e4562ed541d1f6636917_01b0eb8ba6'
                  tabIndex='-1'
                  value=''
                />
                <button
                  className='button is-outlined is-light'
                  style={{ width: "130px", marginTop: "16px" }}
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
          <div className='hero-body' style={{ padding: "0px" }}>
            <div className='container has-text-centered'>
              {/* <div className='columns'>
                    <div className='column is-half'>

                    </div>

                    <div className='column'>
                        <h1 className="title">
                        Always add value.
                        </h1>
                        <h2 className="subtitle">
                        Add value to the IoTeX network whilst adding to your wallet. Stake with iotxplorer.
                        </h2>
                    </div>
                </div> */}
            </div>
          </div>
        </section>
        <div className='box cta'>
          <p className='has-text-centered'>
            <span className='tag is-primary'>Note</span> You can read our{" "}
            <a
              href='https://medium.com/@iotxplorer/who-we-are-an-introduction-to-iotxplorer-35005c020867'
              target='_blank'
            >
              full introduction
            </a>{" "}
            to the community on our blog
          </p>
        </div>

        <div style={{ textAlign: "center" }}>
          <h2
            className='title'
            style={{ marginTop: "48px", marginBottom: "1.8em" }}
          >
            Why iotxplorer?{" "}
          </h2>
        </div>

        <section className='container'>
          <div className='columns features'>
            <div className='column is-4'>
              <div
                className='card is-shady'
                style={{ paddingTop: "1.5em", maxHeight: "398px" }}
              >
                <div className='card-image has-text-centered'>
                  <img
                    src={assetURL("/undraw-safe.svg")}
                    alt='secure'
                    width='275'
                    height='275'
                  />
                </div>
                <div className='card-content'>
                  <div className='content'>
                    <h4 style={{ display: "flex", justifyContent: "center" }}>
                      {" "}
                      Secure.{" "}
                    </h4>
                    <p>
                      {" "}
                      Vote on iotex.io using Metamask or directly from your
                      desktop. Your IOTX is sent to a{" "}
                      <strong>secure smart contract</strong> on the ethereum
                      blockchain and is sent back to you when you want it to be
                      - you are in control.
                      <br /> <br />
                    </p>
                    {/* <p><a href="#">Learn more</a></p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className='column is-4'>
              <div className='card is-shady' style={{ paddingTop: "1.5em" }}>
                <div className='card-image has-text-centered'>
                  <img
                    src={assetURL("/undraw-financial-data.png")}
                    alt='profitable'
                    width='250'
                    height='250'
                  />
                </div>
                <div className='card-content'>
                  <div className='content'>
                    <h4 style={{ display: "flex", justifyContent: "center" }}>
                      {" "}
                      Rewarding.{" "}
                    </h4>
                    <p>
                      {" "}
                      Every epoch, we’ll receive rewards based on our delegate
                      rank.{" "}
                      <strong>
                        We give you{" "}
                        <span style={{ color: "#00d1b2" }}>87%</span> of our
                        rewards
                      </strong>{" "}
                      for ranking in the top 100, and we’ll take the consensus
                      rewards to cover operating costs associated with the
                      hardware and dApp development.
                    </p>
                    {/* <p><a href="#">Learn more</a></p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className='column is-4'>
              <div className='card is-shady' style={{ paddingTop: "1.5em" }}>
                <div className='card-image has-text-centered'>
                  <img
                    src={assetURL("/undraw-transparent.svg")}
                    alt='transparent'
                    width='207'
                    height='207'
                  />
                </div>
                <div className='card-content'>
                  <div className='content'>
                    <h4 style={{ display: "flex", justifyContent: "center" }}>
                      {" "}
                      Transparent.{" "}
                    </h4>
                    <p>
                      {" "}
                      The voting process is{" "}
                      <strong>
                        completely transparent – you’ll always know our ranking
                        and reward structure
                      </strong>
                      . We were the very <strong>first</strong> delegate to
                      provide a member's portal for our voters to track our
                      rank, rewards, and payments.
                    </p>
                    {/* <p><a href="#">Learn more</a></p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div style={{ textAlign: "center" }}>
          <h2
            className='title is-3'
            style={{ marginTop: "48px", marginBottom: "1.8em" }}
          >
            Our mission{" "}
          </h2>
          <img
            src={assetURL("/iotxplorer-mission.svg")}
            alt='secure'
            width='1400'
            height='1400'
            style={{ marginLeft: "48px" }}
          />
        </div>

        <section>
          <div style={{ textAlign: "center" }}>
            <h2
              className='title'
              style={{ marginTop: "48px", marginBottom: "1em" }}
            >
              How it works
            </h2>
          </div>

          <div className='container'>
            <div className='columns'>
              <div className='column'>
                <div className='card'>
                  <div className='card-image'>
                    <img
                      src={assetURL("/delegates-program.png")}
                      alt='delegates program'
                      width='660'
                    />
                  </div>
                  <div
                    className='card-content subtitle'
                    style={{
                      color: "#4c4c4c",
                      paddingBottom: "0.5rem",
                      marginBottom: "0",
                      fontWeight: "600"
                    }}
                  >
                    <a
                      href='https://medium.com/iotex/iotex-delegates-program-application-voting-and-rewards-5cab7e87bd20'
                      target='_blank'
                      style={{ color: "inherit" }}
                    >
                      IoTeX Delegates Program — Requirements (Medium)
                    </a>
                  </div>
                  <div className='card-content'>
                    <p>
                      The governance design of the IoTeX network encodes the
                      rules and processes that define how the network will reach
                      consensus, incentivize network participation, and evolve
                      sustainably over time. In this blog post we provide an
                      overview of the IoTeX Delegates Program, focusing on
                      application, voting and election guidelines.
                    </p>
                    <p style={{ paddingTop: "8px" }}>
                      <a
                        href='https://medium.com/iotex/iotex-delegates-program-application-voting-and-rewards-5cab7e87bd20'
                        target='_blank'
                      >
                        Read more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className='column'>
                <div className='card'>
                  <div className='card-image'>
                    <iframe
                      width='660'
                      height='384'
                      src='https://www.youtube.com/embed/_4gA89Ws334'
                      frameborder='0'
                      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                      allowfullscreen
                    />
                  </div>
                  <div
                    className='card-content subtitle'
                    style={{
                      color: "#4c4c4c",
                      paddingBottom: "0.5rem",
                      marginBottom: "0",
                      fontWeight: "600"
                    }}
                  >
                    IoTeX Delegates Program — Introduction Video
                  </div>
                  <div className='card-content'>
                    <p style={{ marginBottom: "6px" }}>
                      The IoTeX Delegates Program defines the rules and
                      processes that allow IoTeX to maintain consensus and
                      evolve sustainably over time. IoTeX is a digital
                      democracy, where token holders elect Delegates to produce
                      new blocks on behalf of the entire network. In this video,
                      we provide an overview of the staking, voting, ranking,
                      and rewarding process of the IoTeX Delegates Program.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section
            className='hero is-light is-medium is-bold'
            style={{ marginTop: "64px" }}
          >
            <div className='hero-body'>
              <div className='container has-text-centered'>
                <h2 className='title'>We are open to contributions!</h2>
                <h2 className='subtitle'>
                  Please email contact@iotxplorer.io if you are interested.
                </h2>
              </div>
            </div>
          </section>
        </section>
      </section>
    );
  }
}
