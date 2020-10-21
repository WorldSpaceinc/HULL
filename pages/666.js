import React, { useState } from 'react'
import Link from 'next/link'

import { getStaticPage } from '../lib/api'

import Layout from '../components/layout'
import Marquee from '../components/marquee'
import Accordion from '../components/accordion'
import Carousel from '../components/carousel'
import Photo from '../components/photo'
import Drawer from '../components/drawer'

import FormNewsletter from '../modules/form-newsletter'
import FormContact from '../modules/form-contact'

const SixSixSix = ({ data }) => {
  const [showDrawer, setShowDrawer] = useState(false)

  const { site, menus, page } = data

  return (
    <Layout
      site={{
        seo: site.seo,
        social: site.social,
        menus: menus,
      }}
      page={{
        seo: page.seo,
      }}
    >
      <div className="section">
        <h3 className="is-mb0">The Marquee</h3>
        <section className="section">
          <Marquee line="The Magician / The Devil / The Emperor / The Hermit / The Fool / Justice / The High Priestess / Death / The Hierophant /&nbsp;" />
          <Marquee
            reverse
            className="is-white"
            line="The Magician / The Devil / The Emperor / The Hermit / The Fool / Justice / The High Priestess / Death / The Hierophant /&nbsp;"
          />
        </section>
        <hr />
        <h3 className="is-mb0">The Carousel</h3>
        <section className="section">
          <Carousel hasArrows>
            {page.carousel.map((photo, key) => (
              <Photo key={key} photo={photo} className="carousel--photo" />
            ))}
          </Carousel>
        </section>
        <hr />
        <h3 className="is-mb0">The Accordion</h3>
        <section className="section">
          <Accordion key={1} id={1} title="Angel With the Scabbed Wings">
            <p>
              He is the angel with the scabbed wings. Hard-drug face, wanna
              powder his nose. He will deflower the freshest crop. Dry up all
              the wombs with his rock and roll sores. Rock and roll sores. Rock
              and roll sores.
            </p>
          </Accordion>
          <Accordion key={2} id={2} title="Tourniquet">
            <p>
              She's made of hair and bone and little teeth, things that cannot
              speak. She comes on like a crippled plaything, spine is just a
              string. I wrapped our love in all this foil, silver-tight like
              spider legs. I never wanted it to ever spoil but flies will lay
              their eggs.
            </p>
          </Accordion>
          <Accordion key={3} id={3} title="Kinderfeld">
            <p>
              He lives inside my mouth and tells me what to say. When he turns
              the trains on he makes it go away. The hands are cracked and dirty
              and the nails are beetle wings. When he turns the trains on he
              unties all of the strings.
            </p>
          </Accordion>
        </section>
        <hr />
        <h3 className="is-mb0">The Drawer</h3>
        <section className="section">
          <button className="btn" onClick={() => setShowDrawer(true)}>
            The Dope Show
          </button>
          <Drawer
            open={showDrawer}
            toggle={setShowDrawer}
            title="The Dope Show"
          >
            <p>
              The music video, directed by Paul Hunter and co-directed by
              Manson, was filmed during the week of August 8, 1998, and
              premiered on August 20, 1998. In scenes reminiscent of The Man Who
              Fell to Earth, Manson appears — red-haired, with his entire body,
              including prosthetic rubber breasts, covered in white grease paint
              — as an androgynous extraterrestrial wandering around the
              Hollywood Hills. He is captured, studied in a laboratory, and
              eventually transported by limousine to a stage where he and the
              other members of the band — the fictional band Omēga and the
              Mechanical Animals — perform the song in concert before hysterical
              fans who end up rioting and crossing the security barriers. The
              music video also features a direct homage to a sequence in the
              Alejandro Jodorowsky film The Holy Mountain, involving the
              destruction of plaster casts of the main character's body in a
              crucifixion pose. Actor Billy Zane makes a cameo appearance in the
              limo sequence, as a recording industry executive. This same
              sequence features parodies of SPIN magazine and The National
              Enquirer.
            </p>
          </Drawer>
        </section>
        <hr />
        <h3 className="is-mb0">The Grid</h3>
        <section className="section">
          <div className="grid has-wireframe">
            <div className="is-col-12">
              <span>.is-col-12</span>
            </div>
            <div className="is-col-6">
              <span>.is-col-6</span>
            </div>
            <div className="is-col-6">
              <span>.is-col-6</span>
            </div>
            <div className="is-col-4">
              <span>.is-col-4</span>
            </div>
            <div className="is-col-4">
              <span>.is-col-4</span>
            </div>
            <div className="is-col-4">
              <span>.is-col-4</span>
            </div>
            <div className="is-col-3">
              <span>.is-col-3</span>
            </div>
            <div className="is-col-3">
              <span>.is-col-3</span>
            </div>
            <div className="is-col-3">
              <span>.is-col-3</span>
            </div>
            <div className="is-col-3">
              <span>.is-col-3</span>
            </div>
            <div className="is-col-7">
              <span>.is-col-7</span>
            </div>
            <div className="is-col-5">
              <span>.is-col-5</span>
            </div>
          </div>
          <div className="grid has-wireframe">
            <div className="is-col-12 is-col-md-6">
              <span>.is-col-12 / .is-col-md-6</span>
            </div>
            <div className="is-col-12 is-col-md-6">
              <span>.is-col-12 / .is-col-md-6</span>
            </div>
          </div>
        </section>
        <hr />
        <h3 className="is-mb0">The Newsletter</h3>
        <FormNewsletter data={{ formName: 'Test' }} />
        <hr />
        <h3 className="is-mb0">The Contact Form</h3>
        <FormContact data={{ formName: 'Test' }} />
      </div>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const pageData = await getStaticPage('samplePage')

  return {
    props: {
      data: pageData,
    },
  }
}

export default SixSixSix