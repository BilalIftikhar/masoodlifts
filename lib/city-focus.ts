import type { Faq } from "@/lib/faqs"

/**
 * Equipment × city pages outside Sohar that rank in Google (Search Console, 15 Oct–11 Nov 2026):
 * JCB Rental Muscat (6 clicks, position 5.9), Crane Rental Muscat (3.3), Boom Loader Rental Salalah
 * (3 clicks, 3.6), Crane Rental Salalah (3.6) and JCB Rental Nizwa (3.1). They were noindexed with the
 * rest of the grid; each now gets city-specific copy like the Sohar pages (lib/sohar-focus.ts) and is
 * indexed. Every other non-Sohar grid page stays noindexed.
 *
 * Facts used are the ones on the location pages: deliveries from the Sohar yard, scheduled ahead for
 * Muscat and Nizwa, long-distance with monthly hire recommended for Salalah, 25 and 50 ton cranes.
 */
export type CityFocus = {
  paragraphs: string[]
  faqs: Faq[]
  metaDescription: string
}

export const cityFocus: Record<string, CityFocus> = {
  "jcb-rental-muscat": {
    paragraphs: [
      "In Muscat a JCB backhoe loader is the everyday machine for utility trenches, house connections and small foundations in Seeb, Al Mabelah, Al Amerat and Bawshar, and for loading trucks and back-filling on light industrial plots in Rusayl and Ghala. Its size suits city streets where a full excavator would block the road.",
      "On the rocky, sloping ground against the Hajar mountains in Bawshar and Al Amerat, digging is slower and a breaker may be needed; on the flat plots of Seeb and Al Mabelah the JCB works faster. Tell us the area and the ground so we can plan the right attachments before the machine leaves Sohar.",
    ],
    faqs: [
      {
        question: "Which Muscat areas do you deliver JCBs to?",
        answer:
          "All of Muscat Governorate, including Rusayl, Ghala, Al Misfah, Seeb, Al Mabelah, Al Amerat, Bawshar and Wadi Kabir. The JCB travels from our Sohar yard, so we schedule delivery ahead of your start date.",
      },
      {
        question: "Is a JCB or an excavator better for a Muscat villa plot?",
        answer:
          "For trenches, footings and loading on a single plot, a JCB backhoe loader is usually enough and moves easily between jobs. For deep excavation, rock or large volumes, an excavator is the better choice.",
      },
    ],
    metaDescription:
      "JCB backhoe loader rental in Muscat with operator for trenches, footings and loading in Seeb, Al Amerat, Bawshar, Rusayl and Ghala. Daily to monthly hire.",
  },
  "crane-rental-muscat": {
    paragraphs: [
      "Crane work in Muscat is a mix of city and industrial lifts: rooftop units, water tanks, precast and steel on commercial and residential projects, and machinery or container lifts for workshops and warehouses in Rusayl Industrial Estate and Ghala Industrial Area.",
      "City sites often have tight access and limited space for outriggers, so we ask for a photo of where the crane can stand along with the load weight and radius. Because the crane travels from Sohar along the Batinah Expressway, we book the lift date in advance and plan the set-up before it arrives.",
    ],
    faqs: [
      {
        question: "Which crane sizes are available in Muscat?",
        answer: "25 ton and 50 ton mobile cranes, both supplied with an operator.",
      },
      {
        question: "How far ahead should I book a crane in Muscat?",
        answer:
          "As early as you know the lift date. The crane comes from our Sohar yard, so a confirmed date lets us plan the trip and the set-up with you before it travels.",
      },
    ],
    metaDescription:
      "25 & 50 ton mobile crane rental in Muscat with operator for rooftop, precast and industrial lifts in Rusayl, Ghala and Seeb. Booked ahead from Sohar.",
  },
  "boom-loader-rental-salalah": {
    paragraphs: [
      "In Salalah boom loaders lift blocks, cement and roofing materials on residential and commercial projects across the city, and handle palletised cargo and materials around warehouses and yards near the Port of Salalah, the Free Zone and Raysut Industrial Estate.",
      "The khareef season from June to September brings drizzle and wet ground on the coastal plain, so plan for softer ground and slower work in those months. Salalah is a long-distance move from Sohar, so boom loaders here are usually hired by the month, which spreads the transport cost over the job.",
    ],
    faqs: [
      {
        question: "Can I hire a boom loader in Salalah for a few days?",
        answer:
          "It is possible, but because the machine travels from Sohar, monthly hire is usually far better value for Salalah projects. Tell us the length of the job and we will quote both.",
      },
      {
        question: "Do you work in Raysut and the Salalah Free Zone?",
        answer: "Yes. We supply boom loaders across Salalah, including the Port of Salalah, the Free Zone, Raysut Industrial Estate, Taqah and Mirbat.",
      },
    ],
    metaDescription:
      "Boom loader (telehandler) rental in Salalah with operator for construction, Raysut and port-area sites. Monthly hire recommended for Dhofar projects.",
  },
  "crane-rental-salalah": {
    paragraphs: [
      "Cranes in Salalah lift machinery and steel at Raysut Industrial Estate, offload heavy cargo for businesses around the Port of Salalah and the Free Zone, and set precast and plant on construction sites across the city and Dhofar.",
      "During the khareef, from June to September, mist and drizzle reduce visibility and soften the ground, so lift plans and outrigger positions need extra care. Because a crane travels a long way from Sohar to Salalah, we plan the move with you in advance and group lifts where we can.",
    ],
    faqs: [
      {
        question: "Which crane sizes can you send to Salalah?",
        answer: "25 ton and 50 ton mobile cranes, both supplied with an operator.",
      },
      {
        question: "Can you do several lifts in Salalah on one trip?",
        answer:
          "Yes, and it is the best way to keep the cost down. Send all the lifts you have planned, with weights and dates, and we will schedule them around one mobilization where possible.",
      },
    ],
    metaDescription:
      "25 & 50 ton crane rental in Salalah with operator for Raysut, port-area and Dhofar construction lifts. Lifts planned ahead and grouped per trip from Sohar.",
  },
  "jcb-rental-nizwa": {
    paragraphs: [
      "Around Nizwa a JCB backhoe loader digs trenches for water and power connections, prepares villa plots and footings, and loads trucks on road and utility jobs across Ad Dakhiliyah, from Firq and Birkat Al Mawz to Bahla, Izki and Manah.",
      "The interior is gravel and rock at the foot of the Hajar mountains, so digging is often harder than on the coast and a breaker may be needed. In the older parts of Nizwa and nearby towns, narrow streets and falaj channels must be protected, which is where a JCB's size helps. Deliveries come by road from Sohar, so we book them a few days ahead.",
    ],
    faqs: [
      {
        question: "Do you deliver JCBs to Bahla, Izki and Manah?",
        answer:
          "Yes. We cover Nizwa and the surrounding towns of Ad Dakhiliyah, including Firq, Bahla, Izki, Manah and Birkat Al Mawz, with delivery booked a few days ahead from Sohar.",
      },
      {
        question: "Can a JCB dig in rocky ground around Nizwa?",
        answer:
          "Often, yes, but hard rock is slow for a backhoe. Tell us about the ground; for heavy rock an excavator with a breaker is usually the better machine.",
      },
    ],
    metaDescription:
      "JCB backhoe loader rental in Nizwa with operator for trenches, plots and road works in Firq, Bahla, Izki and Manah. Delivered from Sohar, booked ahead.",
  },
}
