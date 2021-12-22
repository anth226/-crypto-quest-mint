import Head from 'next/head'
import InventoryItem from '../components/InventoryItem'
// import styles from '../styles/Home.module.css'

export default function Inventory() {

    const inventories = [
        {
            "image": "avatar-3",
            "name": "Elfic Someone",
            "race": "Elfic",
            "gender": "Female",
            "level": "5",
            "description": "As we are developing our project and the site, we realize we need more screens. Let us know if this continued commitment is okay, because we have a bit more work needed. Vivamus egestas, eros ornare ultricies placerat, neque urna varius tortor, vitae luctus lectus diam in libero. Praesent laoreet purus a eros fringilla facilisis. Donec at est et mauris mattis fermentum.",
        },
        {
            "image": "avatar-1",
            "name": "Tough Girl",
            "race": "Human",
            "gender": "Female",
            "level": "7",
            "description": "Integer sodales vulputate elit, eget lobortis arcu dictum id. Duis consequat accumsan elit id varius. Ut ultrices rhoncus efficitur. Proin sagittis convallis nulla vitae vestibulum. Suspendisse sit amet sapien id erat facilisis sodales.",
          }
    ]
  return (
    <div>
      <Head>
        <title>Wizards & Wagons</title>
        <meta name="description" content="Wizards & Wagons homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<main className="main">
  <div className="content-header ripped-bottom">
    <div className="container m:pb-7 l:pb-6">
      <h1 className="content-header__title text-center my-0"><span>My Inventory</span></h1>
    </div>
  </div>
  <div className="section section--bg-curves">
    <div className="container container--medium m:pt-0">
  
      <div className="inventory relative zindex-1 mw-600px m:mw-900px mx-auto m:mt-n7">
        <div className="inventory__header pb-4 l:pb-5">
          <div className="filters d-flex align-items-end gap-3 s:gap-4 fs-xl m:fs-xxl m:mx-3">
            <div className="d-flex flex-wrap flex-grow-1 justify-content-between gap-3 s:gap-4">
              <select className="form-select form-select--transparent" aria-label="Filter By Attributes">
                <option>Filter By Attributes</option>
                <option>This can be long as f***, select width will update, but better keep is short</option>
              </select>
              <select className="form-select form-select--transparent" aria-label="Sort By">
                <option>Sort By</option>
                <option>Coolest to Poorest</option>
                <option>Rating</option>
                <option>Anything else</option>
              </select>
            </div>
            <div className="flex-shrink-0">6 Items</div>
          </div>
        </div>
        
        <div className="inventory__list gy-5">
  
          {
            //   inventories.map((props) => <Inventory {...props} key={props.image} />)
          }
    
        </div>
      </div>
    
    </div>
  </div>
</main>
      {/* <Footer /> */}
    </div>
  )
}
