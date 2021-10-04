

document.getElementById("toDate").addEventListener('change', ()=> {
    var fromDate = new Date(document.getElementById("fromDate").value);
    var toDate = new Date(document.getElementById("toDate").value);
    var converter = 24*60*60*1000;
        noOfDays = Math.round(Math.abs((fromDate - toDate)/(converter)));
        document.getElementById("passNights").value = noOfDays;
        function calulateAmount() {
            var pricePerDay = 1000;
            var noOfPersons = document.getElementById("adult").value;
            var totalAmount = noOfDays*pricePerDay*noOfPersons;
            document.getElementById("price").value=`Rs - ${totalAmount}`;
        }calulateAmount();
        document.getElementById("adult").addEventListener('change', ()=> {
            calulateAmount();
        });
});

const data = null;
const xhr = new XMLHttpRequest();
xhr.withCredentials = false;

var idInUrl = window.location.href.split("?")[1];;
let decodeidInUrl  = decodeURI(idInUrl.split("=")[1]);
//alert(decodeidInUrl);
document.getElementById("PassId").value = decodeidInUrl;

var hotelFilteredArray = [];

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
   
        var responseParser = JSON.parse(this.responseText).data[0];
        //console.log(responseParser);

			var hotelName = responseParser.name;
            var hotelDescription = responseParser.description;
			var hotelRating = responseParser.rating;
            var hotelImageUrl = responseParser.photo.images.original.url;
            var hotelAwardsImages = responseParser.awards[0].images.large;
            //console.log(hotelImageUrl);
           let amenitiesList = responseParser.amenities.map((eachAmenity) => {
               //console.log(eachAmenity.name);
                return `<li>${eachAmenity.name}</li>`;
            });
       
            let awardsImageList = responseParser.awards.map((eachAwardImage) => {
                //console.log(eachAmenity.name);
                 return `<div class="carousel-item">
                 <img class="slider-image" class="d-block w-100" src="${eachAwardImage.images.large}" alt="Third slide">
                 </div>`;
             });

            document.getElementById("slider-").innerHTML = document.getElementById("slider-").innerHTML +
`
<div class="carousel-item active">
<img class="slider-image" class="d-block w-100" src="${hotelImageUrl}" alt="Second slide">
</div>
${awardsImageList}`
;


            document.getElementById("details-").innerHTML = document.getElementById("details-").innerHTML + `
            <div id="hotel-description">
            <h2>${hotelName}</h2>
            <h5 class="heading">RATING</h5>
            <div id="rating">
                <span>${hotelRating}</span>
                <span class="fa fa-star checked" id="1"></span>
                <span class="fa fa-star checked" id="2"></span>
                <span class="fa fa-star checked" id="3"></span>
                <span class="fa fa-star checked" id="4"></span>
                <span class="fa fa-star checked" id="5"></span>
            </div>
            <h5 class="heading">AMENITIES</h5>
            <ul>${amenitiesList}</ul>
            <h5 class="heading">DESCRIPTION</h5>
            <p>
                ${hotelDescription}
            </p>
        </div>`
		

	}
});

xhr.open("GET", `https://travel-advisor.p.rapidapi.com/hotels/get-details?lang=en_US&location_id=${decodeidInUrl}`);
xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "d6c3573094msh3aac96243c58e0ap1271e5jsn1202883ad144");

xhr.send();


// {
//     "data":[
//        {
//           "location_id":"299120",
//           "name":"The Lalit New Delhi",
//           "latitude":"28.631432",
//           "longitude":"77.22716",
//           "num_reviews":"9171",
//           "timezone":"Asia/Kolkata",
//           "location_string":"New Delhi, National Capital Territory of Delhi",
//           "photo":{
//              "images":{
//                 "small":{
//                    "width":"150",
//                    "url":"https://media-cdn.tripadvisor.com/media/photo-l/1d/13/78/86/facade.jpg",
//                    "height":"150"
//                 },
//                 "thumbnail":{
//                    "width":"50",
//                    "url":"https://media-cdn.tripadvisor.com/media/photo-t/1d/13/78/86/facade.jpg",
//                    "height":"50"
//                 },
//                 "original":{
//                    "width":"1024",
//                    "url":"https://media-cdn.tripadvisor.com/media/photo-w/1d/13/78/86/facade.jpg",
//                    "height":"731"
//                 },
//                 "large":{
//                    "width":"1024",
//                    "url":"https://media-cdn.tripadvisor.com/media/photo-o/1d/13/78/86/facade.jpg",
//                    "height":"731"
//                 },
//                 "medium":{
//                    "width":"550",
//                    "url":"https://media-cdn.tripadvisor.com/media/photo-s/1d/13/78/86/facade.jpg",
//                    "height":"393"
//                 }
//              },
//              "is_blessed":true,
//              "uploaded_date":"2021-06-03T01:28:39-0400",
//              "caption":"Facade",
//              "id":"487815302",
//              "helpful_votes":"0",
//              "published_date":"2021-06-03T01:28:39-0400",
//              "user":null
//           },
//           "awards":[
//              {
//                 "award_type":"CERTIFICATE_OF_EXCELLENCE",
//                 "year":"2021",
//                 "images":{
//                    "small":"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
//                    "large":"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2021_en_US_large-0-5.jpg"
//                 },
//                 "categories":[
                   
//                 ],
//                 "display_name":"Certificate of Excellence 2021"
//              },
//              {
//                 "award_type":"CERTIFICATE_OF_EXCELLENCE",
//                 "year":"2020",
//                 "images":{
//                    "small":"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
//                    "large":"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg"
//                 },
//                 "categories":[
                   
//                 ],
//                 "display_name":"Certificate of Excellence 2020"
//              },
//              {
//                 "award_type":"CERTIFICATE_OF_EXCELLENCE",
//                 "year":"2019",
//                 "images":{
//                    "small":"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
//                    "large":"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg"
//                 },
//                 "categories":[
                   
//                 ],
//                 "display_name":"Certificate of Excellence 2019"
//              },
//              {
//                 "award_type":"CERTIFICATE_OF_EXCELLENCE",
//                 "year":"2018",
//                 "images":{
//                    "small":"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
//                    "large":"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg"
//                 },
//                 "categories":[
                   
//                 ],
//                 "display_name":"Certificate of Excellence 2018"
//              },
//              {
//                 "award_type":"CERTIFICATE_OF_EXCELLENCE",
//                 "year":"2017",
//                 "images":{
//                    "small":"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
//                    "large":"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg"
//                 },
//                 "categories":[
                   
//                 ],
//                 "display_name":"Certificate of Excellence 2017"
//              },
//              {
//                 "award_type":"CERTIFICATE_OF_EXCELLENCE",
//                 "year":"2016",
//                 "images":{
//                    "small":"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
//                    "large":"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2016_en_US_large-0-5.jpg"
//                 },
//                 "categories":[
                   
//                 ],
//                 "display_name":"Certificate of Excellence 2016"
//              }
//           ],
//           "preferred_map_engine":"default",
//           "raw_ranking":"4.711686611175537",
//           "ranking_geo":"New Delhi",
//           "ranking_geo_id":"304551",
//           "ranking_position":"17",
//           "ranking_denominator":"2299",
//           "ranking_category":"hotel",
//           "ranking":"#17 of 2,299 hotels in New Delhi",
//           "subcategory_type":"hotel",
//           "subcategory_type_label":"Hotel",
//           "distance":null,
//           "distance_string":null,
//           "bearing":null,
//           "rating":"4.5",
//           "is_closed":false,
//           "is_long_closed":false,
//           "price_level":"$$",
//           "price":"$69 - $334",
//           "hotel_class":"5.0",
//           "hotel_class_attribution":"This property is classified according to Giata.",
//           "business_listings":{
//              "desktop_contacts":[
                
//              ],
//              "mobile_contacts":[
                
//              ]
//           },
//           "special_offers":{
//              "desktop":[
                
//              ],
//              "mobile":[
                
//              ]
//           },
//           "listing_key":"9e15e93e-f4ae-43e8-b667-53d84a1b5892",
//           "description":"The LaLiT Hotels in Delhi, one of the best luxury hotels in Delhi India, stands tall right in the middle of city’s premier business and commercial district – Connaught Place. Being the central luxury business hotel in Delhi, it is located right next to lively shopping centres, office complexes and colourful streets, the hotel is 24 kms from the international airport and just minutes away from government offices, cultural centres and international trade fairgrounds. With the largest room sizes amongst all luxury hotels Delhi, The LaLiT New Delhi offers a total of 461 five star hotel rooms. The bedrooms are all well tailored to the needs of both a business traveler as well as a vacationer and accompanied by hotels modern amenities and elegant decor. Guests at our luxury hotels, have an option of choosing from a Deluxe Rooms, LaLiT Luxury Rooms and the suites. Serving cuisines from both the world of east and west, The LaLiT, hotels New Delhi offers four fine dining restaurants serving food to suit all types of palate. For those enjoying traditional Oriental food, The Woks serve authentic Oriental food while The Grill serves European food. And if guests want to taste food prepared in the traditional Indian way, we invite them to try our Indian cuisine at Baluchi while our multi-cuisine restaurant and Bar – 24/7 is the best place for guests who enjoy food while also interacting with chefs of the restaurant. At 24/7 guests have an option of choosing variety of food at the buffet or being selective through the elaborate a-la-carte menu. At The LaLiT, luxury hotel Delhi, guests can be at comfort both at work as well as leisure. Ideal for all types of events, The LaLiT New Delhi offers a total of six banquet hall. Guests can organize all types of events with us - from small top-notch corporate events to private party events and from big conference meeting to huge wedding ceremony. Enough to accommodate upto 800 people, hotels' banquet facilities are added advantage amongst all hotels in Delhi. So whether the event is corporate or if it is a planning a wedding at hotels, The LaLiT New Delhi hotels offers just the right kind of banquets and meeting space for the hotels in New Delhi. Other world class hotel facilities at this 5 star luxury hotels Delhi include 24 hour Business Centre, Hotels Concierge Desk, Foreign Exchange, Limousine Service, 24 hour In-room Dining, Laundry Service, Valet Car Parking, Shopping Arcade, Doctor on Call, Rejuve – The Spa and a well equipped Gymnasium so that the business traveler feels more productive and rejuvenated. At Connaught Place, the center of the city - is The LaLiT New Delhi - an 18 story edifice with easy access to the city’s commercial complexes, conference centers, shopping hubs and historic sights. Wonderful interiors, immaculate service and fine cuisine combine to make The LaiLiT New Delhi is an eventful address of the city. Amongst other five star hotels Delhi this luxury hotel is within close proximity to historical landmarks like India Gate, Jama Masjid and Red Fort. Located at the city center, The Lalit New Delhi is just 35 minute drive from the airport and is merely 5 minute from the railway station. The city is well connected through air and rail links apart from two of the national highways which connect New Delhi to all the major cities in the country. The Hotel is also 10 minute drive from the trade fair ground and merely 15 minute drive from several embassies.",
//           "web_url":"https://www.tripadvisor.com/Hotel_Review-g304551-d299120-Reviews-The_Lalit_New_Delhi-New_Delhi_National_Capital_Territory_of_Delhi.html",
//           "write_review":"https://www.tripadvisor.com/UserReview-g304551-d299120-The_Lalit_New_Delhi-New_Delhi_National_Capital_Territory_of_Delhi.html",
//           "ancestors":[
//              {
//                 "subcategory":[
//                    {
//                       "key":"city",
//                       "name":"City"
//                    }
//                 ],
//                 "name":"New Delhi",
//                 "abbrv":null,
//                 "location_id":"304551"
//              },
//              {
//                 "subcategory":[
//                    {
//                       "key":"state",
//                       "name":"State"
//                    }
//                 ],
//                 "name":"National Capital Territory of Delhi",
//                 "abbrv":null,
//                 "location_id":"297602"
//              },
//              {
//                 "subcategory":[
//                    {
//                       "key":"country",
//                       "name":"Country"
//                    }
//                 ],
//                 "name":"India",
//                 "abbrv":null,
//                 "location_id":"293860"
//              }
//           ],
//           "category":{
//              "key":"hotel",
//              "name":"Hotel"
//           },
//           "subcategory":[
//              {
//                 "key":"hotel",
//                 "name":"Hotel"
//              }
//           ],
//           "parent_display_name":"New Delhi",
//           "guide_count":"0",
//           "is_jfy_enabled":false,
//           "nearest_metro_station":[
             
//           ],
//           "phone":"+91 11 4444 7777",
//           "website":"http://www.thelalit.com",
//           "email":"newdelhi@thelalit.com",
//           "address_obj":{
//              "street1":"Barakhamba Avenue",
//              "street2":"Connaught Place",
//              "city":"New Delhi",
//              "state":"National Capital Territory of Delhi",
//              "country":"India",
//              "postalcode":"110001"
//           },
//           "address":"Barakhamba Avenue Connaught Place, New Delhi 110001 India",
//           "local_name":"The Lalit New Delhi",
//           "local_address":"Barakhamba Avenue, Connaught Place, 110001",
//           "local_lang_code":"en-IN",
//           "is_candidate_for_contact_info_suppression":false,
//           "amenities":[
//              {
//                 "key":"fitness_center",
//                 "name":"Fitness center"
//              },
//              {
//                 "key":"room_service",
//                 "name":"Room service"
//              },
//              {
//                 "key":"restaurant",
//                 "name":"Restaurant"
//              },
//              {
//                 "key":"business_services",
//                 "name":"Business center"
//              },
//              {
//                 "key":"high_speed_internet_in_room",
//                 "name":"Internet"
//              },
//              {
//                 "key":"spa",
//                 "name":"Spa"
//              },
//              {
//                 "key":"Wifi",
//                 "name":"Wifi"
//              },
//              {
//                 "key":"suites",
//                 "name":"Suites"
//              },
//              {
//                 "key":"Free Internet",
//                 "name":"Free Internet"
//              },
//              {
//                 "key":"free_wireless_internet_in_room",
//                 "name":"Free Wifi"
//              },
//              {
//                 "key":"wheelchair_access",
//                 "name":"Wheelchair access"
//              },
//              {
//                 "key":"bar_lounge",
//                 "name":"Bar/Lounge"
//              },
//              {
//                 "key":"Kids Activities",
//                 "name":"Kids Activities"
//              },
//              {
//                 "key":"airport_transportation",
//                 "name":"Airport transportation"
//              },
//              {
//                 "key":"Public Wifi",
//                 "name":"Public Wifi"
//              },
//              {
//                 "key":"Dry Cleaning",
//                 "name":"Dry Cleaning"
//              },
//              {
//                 "key":"meeting_room",
//                 "name":"Meeting rooms"
//              },
//              {
//                 "key":"Non-Smoking Rooms",
//                 "name":"Non-smoking rooms"
//              },
//              {
//                 "key":"Laundry Service",
//                 "name":"Laundry Service"
//              },
//              {
//                 "key":"concierge_desk",
//                 "name":"Concierge"
//              },
//              {
//                 "key":"Banquet Room",
//                 "name":"Banquet Room"
//              },
//              {
//                 "key":"air_conditioning",
//                 "name":"Air conditioning"
//              },
//              {
//                 "key":"Family Rooms",
//                 "name":"Family Rooms"
//              },
//              {
//                 "key":"Multilingual Staff",
//                 "name":"Multilingual Staff"
//              },
//              {
//                 "key":"Smoking Rooms Available",
//                 "name":"Smoking rooms available"
//              },
//              {
//                 "key":"reduced_mobility_rooms",
//                 "name":"Accessible rooms"
//              },
//              {
//                 "key":"Refrigerator",
//                 "name":"Refrigerator in room"
//              },
//              {
//                 "key":"Minibar",
//                 "name":"Minibar"
//              },
//              {
//                 "key":"Conference Facilities",
//                 "name":"Conference Facilities"
//              },
//              {
//                 "key":"Babysitting",
//                 "name":"Babysitting"
//              },
//              {
//                 "key":"Safe",
//                 "name":"Safe"
//              },
//              {
//                 "key":"Flatscreen TV",
//                 "name":"Flatscreen TV"
//              },
//              {
//                 "key":"Rooftop Terrace",
//                 "name":"Rooftop Terrace"
//              },
//              {
//                 "key":"Breakfast Buffet",
//                 "name":"Breakfast Buffet"
//              },
//              {
//                 "key":"Poolside Bar",
//                 "name":"Poolside Bar"
//              },
//              {
//                 "key":"Butler Service",
//                 "name":"Butler Service"
//              },
//              {
//                 "key":"Breakfast Available",
//                 "name":"Breakfast Available"
//              },
//              {
//                 "key":"Parking",
//                 "name":"Parking"
//              },
//              {
//                 "key":"Facilities for Disabled Guests",
//                 "name":"Facilities for Disabled Guests"
//              },
//              {
//                 "key":"Housekeeping",
//                 "name":"Housekeeping"
//              },
//              {
//                 "key":"Allergy-free Room",
//                 "name":"Allergy-free Room"
//              },
//              {
//                 "key":"Baggage Storage",
//                 "name":"Baggage Storage"
//              },
//              {
//                 "key":"Breakfast in the Room",
//                 "name":"Breakfast in the Room"
//              },
//              {
//                 "key":"Bridal Suite",
//                 "name":"Bridal Suite"
//              },
//              {
//                 "key":"Car Hire",
//                 "name":"Car Hire"
//              },
//              {
//                 "key":"Currency Exchange",
//                 "name":"Currency Exchange"
//              },
//              {
//                 "key":"Doorperson",
//                 "name":"Doorperson"
//              },
//              {
//                 "key":"English - Amenities",
//                 "name":"English"
//              },
//              {
//                 "key":"Entertainment Staff",
//                 "name":"Entertainment Staff"
//              },
//              {
//                 "key":"Fitness / Spa Locker Rooms",
//                 "name":"Fitness / Spa Locker Rooms"
//              },
//              {
//                 "key":"24-Hour Front Desk",
//                 "name":"24-Hour Front Desk"
//              },
//              {
//                 "key":"Gift Shop - Amenities",
//                 "name":"Gift Shop"
//              },
//              {
//                 "key":"Hindi",
//                 "name":"Hindi"
//              },
//              {
//                 "key":"Interconnected rooms available",
//                 "name":"Interconnected room(s) available"
//              },
//              {
//                 "key":"Iron",
//                 "name":"Iron"
//              },
//              {
//                 "key":"Ironing Service",
//                 "name":"Ironing Service"
//              },
//              {
//                 "key":"Kid-Friendly Buffet",
//                 "name":"Kid-Friendly Buffet"
//              },
//              {
//                 "key":"Massage",
//                 "name":"Massage"
//              },
//              {
//                 "key":"Newspaper",
//                 "name":"Newspaper"
//              },
//              {
//                 "key":"Paid Private Parking On-site",
//                 "name":"Paid Private Parking On-site"
//              },
//              {
//                 "key":"Salon",
//                 "name":"Salon"
//              },
//              {
//                 "key":"24-Hour Security",
//                 "name":"24-Hour Security"
//              },
//              {
//                 "key":"Secured Parking",
//                 "name":"Secured Parking"
//              },
//              {
//                 "key":"Shoeshine",
//                 "name":"Shoeshine"
//              },
//              {
//                 "key":"Shops - Amenities",
//                 "name":"Shops"
//              },
//              {
//                 "key":"Soundproof Rooms",
//                 "name":"Soundproof Rooms"
//              },
//              {
//                 "key":"Taxi Service",
//                 "name":"Taxi Service"
//              },
//              {
//                 "key":"Valet Parking - Amenities",
//                 "name":"Valet Parking"
//              },
//              {
//                 "key":"VIP Room Facilities",
//                 "name":"VIP Room Facilities"
//              }
//           ],
//           "photo_count":"2275",
//           "has_review_draft":false,
//           "has_panoramic_photos":false,
//           "rating_histogram":{
//              "count_1":"202",
//              "count_2":"209",
//              "count_3":"708",
//              "count_4":"1808",
//              "count_5":"6244"
//           },
//           "room_tips":[
//              {
//                 "user":{
//                    "user_id":"CBBC9CF7104DF3CA73BCC409F363F73C",
//                    "type":"user",
//                    "first_name":null,
//                    "last_initial":null,
//                    "name":null,
//                    "member_id":"0",
//                    "username":"SanjayPunjabi",
//                    "user_location":{
//                       "name":"Mumbai, India",
//                       "id":"304554"
//                    },
//                    "avatar":{
//                       "small":{
//                          "url":"https://media-cdn.tripadvisor.com/media/photo-t/0b/79/8f/bb/sanjaypunjabi.jpg"
//                       },
//                       "large":{
//                          "url":"https://media-cdn.tripadvisor.com/media/photo-f/0b/79/8f/bb/sanjaypunjabi.jpg"
//                       }
//                    },
//                    "link":"https://www.tripadvisor.com/MemberProfile-a_uid.CBBC9CF7104DF3CA73BCC409F363F73C",
//                    "points":"0",
//                    "created_time":"2015-11-04T11:46:09-0500",
//                    "locale":"en_IN"
//                 },
//                 "type":"room_tip",
//                 "text":"Please go in for a high floored room, preferably with a swimming pool view.",
//                 "rating":"3",
//                 "review_id":"797851887",
//                 "id":"797851887",
//                 "created_time":"2021-07-18T07:39:40-04:00"
//              },
//              {
//                 "user":{
//                    "user_id":"FB1B79496457E7FFD30837E46055185D",
//                    "type":"user",
//                    "first_name":null,
//                    "last_initial":null,
//                    "name":null,
//                    "member_id":"0",
//                    "username":"manishm346",
//                    "user_location":{
//                       "name":"Khanna, India",
//                       "id":"12346228"
//                    },
//                    "avatar":{
//                       "small":{
//                          "url":"https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/f2/eb/default-avatar-2020-27.jpg"
//                       },
//                       "large":{
//                          "url":"https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/f2/eb/default-avatar-2020-27.jpg"
//                       }
//                    },
//                    "link":"https://www.tripadvisor.com/MemberProfile-a_uid.FB1B79496457E7FFD30837E46055185D",
//                    "points":"0",
//                    "created_time":"2017-04-09T07:29:49-0400",
//                    "locale":"en_US"
//                 },
//                 "type":"room_tip",
//                 "text":"Don't go for it ..if you want Tasty and fresh food",
//                 "rating":"1",
//                 "review_id":"796910173",
//                 "id":"796910173",
//                 "created_time":"2021-07-13T00:18:57-04:00"
//              },
//              {
//                 "user":{
//                    "user_id":"1FC2AE0BD35D568036BC70C035A8DE2A",
//                    "type":"user",
//                    "first_name":null,
//                    "last_initial":null,
//                    "name":null,
//                    "member_id":"0",
//                    "username":"playbazaarsatta",
//                    "user_location":{
//                       "name":"New Delhi, India",
//                       "id":"304551"
//                    },
//                    "avatar":{
//                       "small":{
//                          "url":"https://media-cdn.tripadvisor.com/media/photo-t/1d/22/61/23/playbazaarsatta.jpg"
//                       },
//                       "large":{
//                          "url":"https://media-cdn.tripadvisor.com/media/photo-f/1d/22/61/23/playbazaarsatta.jpg"
//                       }
//                    },
//                    "link":"https://www.tripadvisor.com/MemberProfile-a_uid.1FC2AE0BD35D568036BC70C035A8DE2A",
//                    "points":"0",
//                    "created_time":"2021-06-12T20:54:24-0400",
//                    "locale":"en_IN"
//                 },
//                 "type":"room_tip",
//                 "text":"Must visit",
//                 "rating":"5",
//                 "review_id":"792282639",
//                 "id":"792282639",
//                 "created_time":"2021-06-12T17:03:44-04:00"
//              },
//              {
//                 "user":{
//                    "user_id":"196D848881E8ED491A8C5414806A098A",
//                    "type":"user",
//                    "first_name":null,
//                    "last_initial":null,
//                    "name":null,
//                    "member_id":"0",
//                    "username":"gmpallath",
//                    "user_location":{
//                       "name":"Kochi (Cochin), India",
//                       "id":"297633"
//                    },
//                    "avatar":{
//                       "small":{
//                          "url":"https://media-cdn.tripadvisor.com/media/photo-t/05/e5/0a/df/george-p.jpg"
//                       },
//                       "large":{
//                          "url":"https://media-cdn.tripadvisor.com/media/photo-f/05/e5/0a/df/george-p.jpg"
//                       }
//                    },
//                    "link":"https://www.tripadvisor.com/MemberProfile-a_uid.196D848881E8ED491A8C5414806A098A",
//                    "points":"0",
//                    "created_time":"2014-05-20T23:41:58-0400",
//                    "locale":"en_US"
//                 },
//                 "type":"room_tip",
//                 "text":"27th floor",
//                 "rating":"3",
//                 "review_id":"786362473",
//                 "id":"786362473",
//                 "created_time":"2021-04-11T21:54:14-04:00"
//              },
//              {
//                 "user":{
//                    "user_id":"FE18583CEAFCFCE16E59811F98F5DE5D",
//                    "type":"user",
//                    "first_name":null,
//                    "last_initial":null,
//                    "name":null,
//                    "member_id":"0",
//                    "username":"yogeshthadani09",
//                    "user_location":{
//                       "name":"Douala, Cameroon",
//                       "id":"297392"
//                    },
//                    "avatar":{
//                       "small":{
//                          "url":"https://media-cdn.tripadvisor.com/media/photo-t/13/7b/bf/c5/yogesh-t.jpg"
//                       },
//                       "large":{
//                          "url":"https://media-cdn.tripadvisor.com/media/photo-f/13/7b/bf/c5/yogesh-t.jpg"
//                       }
//                    },
//                    "link":"https://www.tripadvisor.com/MemberProfile-a_uid.FE18583CEAFCFCE16E59811F98F5DE5D",
//                    "points":"0",
//                    "created_time":"2013-09-27T12:01:29-0400",
//                    "locale":"en_IN"
//                 },
//                 "type":"room_tip",
//                 "text":"the best views are the swimming pool facing",
//                 "rating":"3",
//                 "review_id":"784905200",
//                 "id":"784905200",
//                 "created_time":"2021-03-20T10:19:19-04:00"
//              }
//           ]
//        }
//     ],
//     "status":{
//        "unfiltered_total_size":"1",
//        "commerce_country_iso_code":"US",
//        "autobroadened":false,
//        "progress":"100",
//        "auction_key":"2349d9fbc9e74a2185b863aec468d074",
//        "pricing":"base"
//     }
//  }