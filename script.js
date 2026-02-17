document.addEventListener("DOMContentLoaded", () => {
    const profileData = [
        {
            name: "Jeffrey",
            surname: "Epstein",
            category: "Main Subject",
            count: 585814,
            warning: "",
            imageUrl: "https://static01.nyt.com/images/2021/12/01/nyregion/01maxwell-trial-epstein-suicide01/merlin_184952091_a2fbdaef-ea7c-41e3-b512-3cd3f16d0f58-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
            wikiUrl: "https://wikipedia.org/wiki/Jeffrey_Epstein",
            description: "Convicted sex offender and financier accused of operating a massive sex trafficking ring. He died in federal custody in 2019 while awaiting trial on new trafficking charges.",
        },
        {
            name: "Ghislaine",
            surname: "Maxwell",
            category: "Accomplice",
            count: 13176,
            warning: "",
            imageUrl: "https://media.cnn.com/api/v1/images/stellar/prod/c-gettyimages-181355194.jpg?c=original&q=w_860,c_fill",
            wikiUrl: "https://wikipedia.org/wiki/Ghislaine_Maxwell",
            description: "Former British socialite convicted in 2021 on multiple counts of sex trafficking and conspiracy for her role in recruiting and grooming underage girls for Jeffrey Epstein.",
        },
        {
            name: "V.",
            surname: "G.",
            category: "Victim/Witness",
            count: 33,
            warning: "Name not fully disclosed in public records to protect privacy. Available wikipedia page, but i prefer to not link it, because of the name not fully disclosed and the page doesn't include the epstein case.",
            imageUrl: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/CFB9/production/_122677135_hi072932831.jpg",
            wikiUrl: "",
            description: "A prominent victim and advocate who filed civil lawsuits against Epstein and Maxwell. Her testimony and legal actions were instrumental in bringing the case to global attention.",
        },
        {
            name: "Prince",
            surname: "Andrew",
            category: "Public Figure/Royal",
            count: 1824,
            warning: "",
            imageUrl: "https://static01.nyt.com/images/2025/10/30/multimedia/30int-uk-andrew-qpkt/30int-uk-andrew-qpkt-threeByTwoLargeAt2X.jpg?auto=webp&quality=30&disable=upscale&format=pjpg",
            wikiUrl: "https://wikipedia.org/wiki/Prince_Andrew",
            description: "The Duke of York, who faced civil allegations of sexual assault by Virginia Giuffre. He settled the lawsuit out of court in 2022 while maintaining his denial of all allegations.",
        },
        {
            name: "Bill",
            surname: "Clinton",
            category: "Public Figure/Politician",
            count: 1195,
            warning: "",
            imageUrl: "https://www.repstatic.it/content/nazionale/img/2024/12/24/034315274-fa5cfede-66e1-40f8-8f73-61b17077f546.jpg",
            wikiUrl: "https://wikipedia.org/wiki/Bill_Clinton",
            description: "Former U.S. President who traveled on Epstein's plane for philanthropic trips in the early 2000s. While mentioned in flight logs and court documents, he has not been accused of any crime.",
        },
        {
            name: "Donald",
            surname: "Trump",
            category: "Public Figure/Politician",
            count: 1436,
            warning: "",
            imageUrl: "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/donald-trump-gettyimages-687193180?_a=BAVAZGB00",
            wikiUrl: "https://wikipedia.org/wiki/Donald_Trump",
            description: "Former U.S. President and businessman who was a social acquaintance of Epstein in Florida and New York during the 1990s. He has not been charged with any wrongdoing related to Epstein.",
        },
        {
            name: "Alan",
            surname: "Dershowitz",
            category: "Public Figure/Legal",
            count: 1170,
            warning: "",
            imageUrl: "https://media.thecrimson.com/photos/2013/12/13/013322_1292663.jpg",
            wikiUrl: "https://en.wikipedia.org/wiki/Alan_Dershowitz",
            description: "Law professor and attorney who represented Epstein during his 2008 non-prosecution agreement. He was mentioned in Giuffre's allegations, which he has consistently and vigorously denied.",
        },
        {
            name: "J",
            surname: "S",
            category: "Victim/Witness",
            count: 0,
            warning: "Name not fully disclosed in public records to protect privacy. Available wikipedia page, but i prefer to not link it, because of the name not fully disclosed and the page doesn't include the epstein case.",
            imageUrl: "https://s.yimg.com/os/en/the_telegraph_258/625f025f373330a04e251313c8de4414",
            wikiUrl: "",
            description: "A witness in the Epstein case who provided deposition testimony regarding encounters at Epstein's properties. She is known for her account of meeting Prince Andrew at Epstein's home.",
        },
        {
            name: "Sarah",
            surname: "Kellen",
            category: "Staff/Assistant",
            count: 2,
            warning: "The Wikipedia page is programmed for deletion!",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaFdVZuYyJYBlgYz4H5xenFoVFT0Z_Oeny_ubG9vrJfuDK-Qaa43fU5CO2gy04wcg4-CfqDc_VcFnhzeKLPzdnopsl-DlAJA0vUWrCct1f&s=10",
            wikiUrl: "https://en.wikipedia.org/wiki/Sarah_Kellen",
            description: "A former employee and personal assistant to Epstein. She was named in various court documents and by victims as an individual involved in managing Epstein's daily schedule and logistics.",
        },
        {
            name: "Adriana",
            surname: "Ross",
            category: "Staff/Assistant",
            count: 4,
            warning: "There isn't a Wikipedia page for this person!",
            imageUrl: "https://m.media-amazon.com/images/M/MV5BYzViMTdlYTMtMDg3NC00Zjc3LTkxNmUtZDhhZGQxNGFjNzdkXkEyXkFqcGc@._V1_.jpg",
            wikiUrl: "",
            description: "A former assistant and associate of Jeffrey Epstein who was mentioned in several civil lawsuits and court depositions regarding the operation of his residences.",
        },
        {
            name: "Nadia",
            surname: "Marcinkova",
            category: "Staff/Assistant",
            count: 0,
            warning: "",
            imageUrl: "https://www.hindustantimes.com/ht-img/img/2025/12/23/cropped/4-3/nadia_m_1766464429208_1766464438510.png",
            wikiUrl: "https://en.wikipedia.org/wiki/Nadia_Marcinko",
            description: "A former associate of Epstein who later became a commercial pilot. She was identified in legal documents as having been part of Epstein's inner circle during his time in Palm Beach.",
        },
        {
            name: "A.",
            surname: "F.",
            category: "Victim/Witness",
            count: 0,
            warning: "Name not fully disclosed in public records to protect privacy.",
            imageUrl: "https://www.rte.ie/images/0019f7e2-1200.jpg",
            wikiUrl: "",
            description: "One of the first women to publicly testify against Epstein and Maxwell. Her testimony about being groomed and abused was a key part of the 2021 trial against Ghislaine Maxwell.",
        },
        {
            name: "M.",
            surname: "F.",
            category: "Victim/Witness",
            count: 0,
            warning: "Name not fully disclosed in public records to protect privacy.",
            imageUrl: "https://static01.nyt.com/images/2019/08/21/us/00epstein-farmer01/00epstein-farmer01-videoSixteenByNineJumbo1600.jpg",
            wikiUrl: "",
            description: "An artist and early whistleblower who reported Epstein and Maxwell to the authorities in the 1990s. She and her sister A. were both victims of Epstein's abuse.",
        },
        {
            name: "Les",
            surname: "Wexner",
            category: "Business Associate",
            count: 200,
            warning: "",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-XIpxCQU49K51YdPhWX8zSGpncHxS10ciSZTSB6pcSFelaDBMR1cun7ZhbxA4TANZJFm2glj1EEAetHmDAfhYK61eAAyP2-pFhB89TQ&s=10",
            wikiUrl: "https://en.wikipedia.org/wiki/Les_Wexner",
            description: "The founder of L Brands and a former primary client of Jeffrey Epstein. While he granted Epstein broad power of attorney, Wexner has stated he severed ties in 2007 and was a victim of Epstein's financial fraud.",
        },
        {
            name: "Jean-Luc",
            surname: "Brunel",
            category: "Associate/Agent",
            count: 4725,
            warning: "",
            imageUrl: "https://ichef.bbci.co.uk/news/480/cpsprodpb/13B97/production/_123319708_073992341.jpg.webp",
            wikiUrl: "https://en.wikipedia.org/wiki/Jean-Luc_Brunel",
            description: "A French modeling agent and close associate of Epstein. He was arrested in France on charges related to the sex trafficking of minors and died in prison in 2022.",
        },
        {
            name: "Al",
            surname: "Gore",
            category: "Public Figure/Politician",
            count: 215,
            warning: "",
            imageUrl: "https://static.sky.it/editorialimages/38a17c9c4ce72d538dcb96d93751e718e882f640/static/contentimages/original/sezioni/tg24/mondo/2018/03/30/GettyImages-Al_Gore.jpg",
            wikiUrl: "https://it.wikipedia.org/wiki/Al_Gore",
            description: "Former U.S. Vice President whose name appeared in flight logs for a 2002 trip. There are no allegations of misconduct against him, and he has no known ongoing connection to Epstein.",
        },
        {
            name: "Kevin",
            surname: "Spacey",
            category: "Public Figure/Celebrity",
            count: 126,
            warning: "",
            imageUrl: "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/9640359/687734476.jpg?quality=90&strip=all&crop=27.833333333333,5.2,40.9,40.9",
            wikiUrl: "https://en.wikipedia.org/wiki/Kevin_Spacey",
            description: "Actor who was a passenger on a 2002 humanitarian flight to Africa funded by Epstein. He has not been accused of any illegal activity involving Epstein's criminal network.",
        },
        {
            name: "Chris",
            surname: "Tucker",
            category: "Public Figure/Celebrity",
            count: 95,
            warning: "",
            imageUrl: "https://www.famousafricanamericans.org/images/chris-tucker.jpg",
            wikiUrl: "https://en.wikipedia.org/wiki/Chris_Tucker",
            description: "Comedian and actor who traveled on the same 2002 trip to Africa as Bill Clinton and Kevin Spacey. There are no allegations of wrongdoing against him in relation to Epstein.",
        },
        {
            name: "Stephen",
            surname: "Hawking",
            category: "Public Figure/Scientist",
            count: 231,
            warning: "",
            imageUrl: "https://cdn.prod.website-files.com/62de46079c380c3a77dab30e/63c87220b6a2e9696ffc1c33_Stephen%20Hawking.jpg",
            wikiUrl: "https://en.wikipedia.org/wiki/Stephen_Hawking",
            description: "Renowned physicist who attended a 2006 science conference on Epstein’s island. His name appeared in court documents regarding the visit, but he was never accused of any illegal behavior.",
        },
		{
			name: "George",
			surname: "Mitchell",
			category: "Public Figure/Politician",
			count: 298,
			warning: "",
			imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxkqv4Oc-7CAtsLBj9DqQNuqSMnlIr3Xp7A&s",
			wikiUrl: "https://en.wikipedia.org/wiki/George_J._Mitchell",
			description: "Virginia Giuffre alleged that Jeffrey Epstein forced her to have sex with powerful men, including Mitchell, in documents unsealed on August 9, 2019. Mitchell denied meeting Giuffre, claiming he learned about Epstein's case through the media.",
		},
		{
			name: "Bill",
			surname: "Richardson",
			category: "Public Figure/Politician",
			count: 818,
			warning: "",
			imageUrl: "data:image/jpeg;base64,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",
			wikiUrl: "https://en.wikipedia.org/wiki/Bill_Richardson",
			description: "In 2019, Richardson was mentioned in court documents from a civil suit involving Virginia Giuffre and Ghislaine Maxwell. Giuffre claimed she was sexually trafficked by them to high-profile individuals, including Richardson, when she was underage. Epstein had funded Richardson's campaigns for Governor of New Mexico. Flight logs showed Richardson and his chief of staff traveled with Epstein and his victims. Richardson denied any involvement in the trafficking ring and stated he was not being investigated. Giuffre's memoir posthumously repeated her accusations, and Richardson was later found in Epstein's contact book.",
		},
		{
			name: "Glenn",
			surname: "Dubin",
			category: "Business Associate",
			count: 706,
			warning: "",
			imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKfFJTQgpkYP50MuqpgVO0P85Ts9YMrazIFw&s",
			wikiUrl: "https://en.wikipedia.org/wiki/Glenn_Dubin",
			description: "Dubin and Jeffrey Epstein are connected through investments and personal relationships. Epstein dated Dubin's wife and was godfather to his children. Despite Epstein’s arrest, the Dubins remained friends. Allegations involving Dubin appear in Virginia Giuffre's lawsuit, which Dubin denies.",
		},
		{
			name: "Eva",
			surname: "Dubin",
			category: "Associate",
			count: 6145,
			warning: "There isn't a wikipedia page for Eva Dubin.",
			imageUrl: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ilxl8tJSnR9Q/v0/-1x-1.webp",
			wikiUrl: "",
			description: "Newly released documents from the U. S. Justice Department about Jeffrey Epstein reveal a 2010 email from his former girlfriend, Eva Andersson-Dubin. The email, sent after Epstein's conviction for soliciting a minor, invites him to visit her home when her daughter Celina was 15 years old. Despite Epstein being a registered sex offender, Dubin claimed she was 100% comfortable having him around her children. The documents highlight connections between Epstein and several high-profile individuals, raising concerns about his continued presence in social circles after his imprisonment. Eva Dubin, a former model, remained friends with Epstein even after their romantic relationship ended.",
		},
		{
			name: "Lawrence",
			surname: "Summers",
			category: "Public Figure/Academic",
			count: 108,
			warning: "",
			imageUrl: "https://static.milanofinanza.it/content_upload/img/2023/10/202310241933533095/lawrencesummers-552023.jpg",
			wikiUrl: "https://en.wikipedia.org/wiki/Lawrence_Summers",
			description: "An article from The Harvard Crimson in 2003 reported a close connection between Harvard President Lawrence Summers and Jeffrey Epstein. Epstein donated at least $25 million to Harvard and had an office there, despite no formal links to the university. Evidence from a 2021 trial indicated Summers traveled on Epstein's private plane several times during and before his presidency. They communicated frequently via email from 2017 to 2019. Summers sought advice from Epstein on personal matters and made controversial remarks about women's intelligence in a 2017 email. After the release of these emails, Summers acknowledged a major error of judgement. In November 2025, he stepped back from various public roles, including his position on the OpenAI board. On December 2, 2025, the American Economic Association imposed a lifetime ban on him from membership and events.",
		},
		{
			name: "Woody",
			surname: "Allen",
			category: "Public Figure/Celebrity",
			count: 7124,
			warning: "",
			imageUrl: "https://rewriters.it/wp-content/uploads/2025/12/allen-4.jpg",
			wikiUrl: "https://en.wikipedia.org/wiki/Woody_Allen",
			description: "Woody Allen wrote to Jeffrey Epstein for his 63rd birthday in 2016, mentioning several young women visiting and various notable guests at Epstein's parties. Allen compared Epstein's home to Castle Dracula and later claimed Epstein felt extorted for their friendship.",
		},
		{
			name: "Ehud",
			surname: "Barak",
			category: "Public Figure/Politician",
			count: 3985,
			warning: "",
			imageUrl: "https://static.mediapart.fr/etmagine/article_google_discover/files/2025/10/06/251006-img-ehud-barak-le-7-octobre-est-le-jour-le-plus-noir-de-lhistoire-d-israel.jpg",
			wikiUrl: "https://en.wikipedia.org/wiki/Ehud_Barak#Relationship_with_Jeffrey_Epstein",
			description: "Barak had a close relationship with Jeffrey Epstein, starting in 2003. He invested in a tech startup, Reporty, with funding from Epstein. Barak visited Epstein many times and flew on his jet, denying any wrongdoing. Leaked emails show Barak arranged meetings with influential figures like Peter Thiel and others in Putin's circle.",
		},
		{
			name: "Tony",
			surname: "Blair",
			category: "Public Figure/Politician",
			count: 229,
			warning: "The wikipedia page for Tony Blair does not mention Jeffrey Epstein.",
			imageUrl: "https://i.guim.co.uk/img/media/c7e2f6301620bf8d16f145002097fc17419f4679/2550_179_4966_2980/master/4966.jpg?width=1200&quality=85&auto=format&fit=max&s=f832dea71a499b640791e93bead479ca",
			wikiUrl: "https://en.wikipedia.org/wiki/Tony_Blair",
			description: "Sir Tony Blair met Jeffrey Epstein in Downing Street in 2002 while still prime minister, after being encouraged by Lord Peter Mandelson. A memo from civil servant Matthew Rycroft discussed Epstein as a wealthy financial adviser ahead of the scheduled meeting. This was years before Epstein's 2008 conviction for soliciting prostitution from a minor. Blair’s spokesperson said he met Epstein briefly and discussed politics, but did not engage with him afterward. Documents about the meeting were released due to a Freedom of Information request.",
		},
		{
			name: "Thomas",
			surname: "Pritzker",
			category: "Business Associate",
			count: 200,
			warning: "The wikipedia page for Thomas Pritzker mention poorly Jeffrey Epstein.",
			imageUrl: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i3YRAK5kmE7k/v1/-1x-1.webp",
			wikiUrl: "https://en.wikipedia.org/wiki/Thomas_Pritzker",
			description: "Virginia Giuffre testified that she was sexually abused by Pritzker in an oath deposition. Pritzker denies the allegation.",
		},
		{
			name: "Sergey",
			surname: "Brin",
			category: "Public Figure/Business",
			count: 258,
			warning: "The wikipedia page for Sergey Brin does not mention Jeffrey Epstein.",
			imageUrl: "https://fortune.com/img-assets/wp-content/uploads/2025/12/GettyImages-2203001968-e1765816522392.jpg?format=webp&w=1440&q=100",
			wikiUrl: "https://en.wikipedia.org/wiki/Sergey_Brin",
			description: "Google co-founder Sergey Brin has been connected to Jeffrey Epstein through legal documents and DOJ releases. Brin visited Epstein's private island in January 2007 with his fiancée. Emails from 2003 show Ghislaine Maxwell invited him to dinners at Epstein's townhouse, suggesting he bring then-Google CEO Eric Schmidt. Brin was subpoenaed in a JPMorgan lawsuit but faces no criminal charges.",
		},
		{
			name: "Mortimer",
			surname: "Zuckerman",
			category: "Public Figure/Business",
			count: 1661,
			warning: "",
			imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMi1iUTAGYwRQkVnf5wnsofigB85H3ACR4FQ&s",
			wikiUrl: "https://en.wikipedia.org/wiki/Mortimer_Zuckerman",
			description: "Zuckerman took part in a birthday book for Jeffrey Epstein's 50th birthday and was recognized as one of Epstein's clients, paying him millions for financial services after his conviction.",
		},
		{
			name: "Doug",
			surname: "Band",
			category: "Associate",
			count: 155,
			warning: "There isn't a wikipedia page for Doug Band",
			imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Xg-t2skU1ISn7ZSMundC4qOyGvikEw4gRg&s",
			wikiUrl: "",
			description: "Doug Band, a former top aide to President Bill Clinton and co-founder of the Clinton Global Initiative, had a well-documented, close, and later controversial association with Jeffrey Epstein and Ghislaine Maxwell. Band was a key figure in managing Clinton's post-presidency, which included trips on Epstein's private jet and interactions with him in the early 2000s. ",
		},
		{
			name: "Mark",
			surname: "Epstein",
			category: "Family Member",
			count: 1245,
			warning: "",
			imageUrl: "https://rubinmuseum.org/wp-content/uploads/people/adrienne-maree-brown/Mark-Epstein.jpg",
			wikiUrl: "https://en.wikipedia.org/wiki/Mark_Epstein_(property_developer)",
			description: "After Jeffrey's 2019 prison death, Mark doubted it was a suicide, suggesting it looked like homicide. He claimed Jeffrey had damaging info on powerful people and urged a new investigation. Mark also discussed Jeffrey's past friendship with Trump.",
		},
		{
			name: "Cathy",
			surname: "Alexander",
			category: "Staff/Assistant",
			count: 42,
			warning: "There isn't a wikipedia page for Cathy Alexander.",
			imageUrl: "https://m.media-amazon.com/images/M/MV5BMjEyNGNiOWQtOTk4YS00YTRiLWI2MWEtYmU3ZWMxNmZhNmFlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
			wikiUrl: "",
			description: "Cathy Alexander (along with her husband Miles) served as the housekeeper and house manager on Jeffrey Epstein's private island, Little St. James, from 1999 to 2007.",
		},
		{
			name: "Juan",
			surname: "Alessi",
			category: "Staff/Employee",
			count: 136,
			warning: "There isn't a wikipedia page for Juan Alessi.",
			imageUrl: "https://nypost.com/wp-content/uploads/sites/2/2021/12/alessi-4.jpg?quality=90&strip=all",
			wikiUrl: "",
			description: "Juan Alessi was the butler of Jeffrey Epstein's villa for 12 years and is a key witness in related investigations. He testified about strict staff rules, minors visiting for massages, finding sex toys, and celebrity guests like Prince Andrew and Donald Trump.",
		},
		{
			name: "Miles",
			surname: "Alexander",
			category: "Staff/Employee",
			count: 243,
			warning: "There isn't a wikipedia page and a Image available for Miles Alexander.",
			imageUrl: "",
			wikiUrl: "",
			description: "Miles Alexander managed Jeffrey Epstein's Caribbean island, Little St. James, from 1999 to 2007, alongside his wife Cathy. They reported seeing young women but never witnessed illegal acts. Alexander viewed Epstein as kind, disapproving of his crimes. In 2023, they were requested to testify in a lawsuit against JPMorgan Chase over Epstein's sex trafficking. They stated they would cooperate but emphasized their role as employees. In 2026, his name appeared in released Department of Justice documents, but no criminal evidence against him was found. He has appeared in various documentaries about the island.",
		},
		{
			name: "Rinaldo",
			surname: "Alessi",
			category: "Staff/Employee",
			count: 0,
			warning: "There isn't a wikipedia page and a Image available for Rinaldo Alessi.",
			imageUrl: "",
			wikiUrl: "",
			description: "Rinaldo Alessi, property manager of Epstein's mansion, testified about Maxwell's role and underage girls visiting. His name appears in declassified documents, revealing his collaboration with authorities.",
		},
		{
			name: "H. R.",
			surname: "",
			category: "Victim/Witness",
			count: 0,
			warning: "Name not fully disclosed in public records to protect privacy.",
			imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj3IikqZXPn7z8EIKxmZkqIFT7cfRsre8isfIdiA6cu2QULVy4HOStlhWaH0jgoObZYEp1ULob7OrA9JWyDZRIFRd9hbMuvlCnVKfFuA&s=10",
			wikiUrl: "",
			description: "She is a survivor and activist linked to the Epstein case, having been abused and an unwitting recruiter. She recruited around 8-10 girls, acting out of vulnerability. Now, she fights for the full publication of the \"Epstein Files\" and criticized political leaders for their views on the case. Her story appears in the Netflix documentary Jeffrey Epstein: Filthy Rich.",
		},
		{
			name: "A. G.",
			surname: "",
			category: "Victim/Witness",
			count: 0,
			warning: "Name not fully disclosed in public records to protect privacy.",
			imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgmvNvQrSGIYP8EP4-r2pSGHGyK2NPPnkqIaz-GYpgQVe1MlAYmf1pXCuMmfT91fWDRMPsTzyWijEyIGM3h7kEHl5qTGOnrDX2gjURRw6M0A&s=10",
			wikiUrl: "",
			description: "She is a survivor of abuse by Jeffrey Epstein, detailing her experiences of manipulation, trauma, and ongoing activism for justice and transparency.",
		},
		{
			name: "Emmy",
			surname: "Taylor",
			category: "Staff/Assistant",
			count: 0,
			warning: "There isn't a wikipedia page for Emmy Taylor.",
			imageUrl: "data:image/jpeg;base64,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",
			wikiUrl: "",
			description: "Emmy Tayler was Ghislaine Maxwell's assistant and close to Jeffrey Epstein, accused of abuse and managing appointments. In 2024, she won a defamation case against HarperCollins. She lives in Oxford and works as an actress.",
		},
		{
			name: "R. B",
			surname: "",
			category: "Victim/Witness",
			count: 4,
			warning: "Name not fully disclosed in public records to protect privacy.",
			imageUrl: "https://static01.nyt.com/images/2025/03/16/multimedia/00FInneyBoylan-03-hzfp/00FInneyBoylan-03-hzfp-mediumSquareAt3X.jpg",
			wikiUrl: "",
			description: "The name appears in court documents related to Jeffrey Epstein. Her inclusion does not imply involvement in illegal activities. She is not Rebecca Epstein, a professional in gender justice.",
		},
		{
			name: "???",
			surname: "???",
			category: "Unknown",
			count: "???",
			warning: "This person is not known.",
			imageUrl: "",
			wikiUrl: "",
			description: "This is for a future person who will be in the epstein case, but for now, we don't know them, so this is unknown.",
		}
	];

	const sections = document.querySelectorAll("section");

	sections.forEach((section) => {
		section.classList.add("section-card");

		const heading = section.querySelector("h1, h2");
		if (!heading) {
			return;
		}

		const wrapper = document.createElement("div");
		wrapper.className = "section-content";

		const nodesToMove = [];
		let node = heading.nextSibling;
		while (node) {
			const next = node.nextSibling;
			nodesToMove.push(node);
			node = next;
		}

		nodesToMove.forEach((item) => wrapper.appendChild(item));
		section.appendChild(wrapper);
	});

	const scrollProgress = document.createElement("div");
	scrollProgress.id = "scroll-progress";
	document.body.appendChild(scrollProgress);

	const updateProgress = () => {
		const doc = document.documentElement;
		const scrollTop = doc.scrollTop || document.body.scrollTop;
		const height = doc.scrollHeight - doc.clientHeight;
		const percent = height > 0 ? (scrollTop / height) * 100 : 0;
		scrollProgress.style.width = `${percent}%`;
	};

	window.addEventListener("scroll", updateProgress, { passive: true });
	updateProgress();

	const backTop = document.createElement("button");
	backTop.className = "back-to-top";
	backTop.type = "button";
	backTop.textContent = "Top";
	backTop.setAttribute("aria-label", "Back to top");
	document.body.appendChild(backTop);

	const toggleTop = () => {
		const offset = window.scrollY || document.documentElement.scrollTop;
		backTop.classList.toggle("show", offset > 300);
	};

	window.addEventListener("scroll", toggleTop, { passive: true });
	toggleTop();

	backTop.addEventListener("click", () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	});

	const lightbox = document.createElement("div");
	lightbox.className = "lightbox";
	lightbox.innerHTML =
		'<button class="lightbox-close" type="button" aria-label="Close image">Close</button><img alt="">';
	document.body.appendChild(lightbox);

	const lightboxImg = lightbox.querySelector("img");
	const closeBtn = lightbox.querySelector(".lightbox-close");

	const closeLightbox = () => {
		lightbox.classList.remove("open");
		lightboxImg.src = "";
	};

	closeBtn.addEventListener("click", closeLightbox);
	lightbox.addEventListener("click", (event) => {
		if (event.target === lightbox) {
			closeLightbox();
		}
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			closeLightbox();
		}
	});

	const bindZoomableImages = (root = document) => {
		root.querySelectorAll("img").forEach((img) => {
			if (img.dataset.zoomable === "true") {
				return;
			}
			img.dataset.zoomable = "true";
			img.classList.add("zoomable");
			img.addEventListener("click", () => {
				lightboxImg.src = img.src;
				lightboxImg.alt = img.alt || "Image preview";
				lightbox.classList.add("open");
			});
		});
	};

	bindZoomableImages();

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("in-view");
				}
			});
		},
		{ threshold: 0.2 }
	);

	sections.forEach((section) => observer.observe(section));

	const profilesSection = document.querySelector("#profiles");
	if (profilesSection) {
		const track = profilesSection.querySelector(".profiles-track");
		const counter = profilesSection.querySelector(".profiles-counter");
		const prevBtn = profilesSection.querySelector('[data-action="prev"]');
		const nextBtn = profilesSection.querySelector('[data-action="next"]');

		if (track) {
			profileData.forEach((person) => {
				const card = document.createElement("article");
				card.className = "profile-card";

				const title = document.createElement("h3");
				const fullName = person.surname
					? `${person.name} ${person.surname}`
					: person.name;
				title.textContent = fullName;

				const meta = document.createElement("div");
				meta.className = "profile-meta";
				const metaLines = [
					`Name: ${person.name}`,
					`Surname: ${person.surname || "-"}`,
					`Category: ${person.category}`,
					`Times named: ${person.count}`,
				];
				metaLines.forEach((text) => {
					const line = document.createElement("p");
					line.textContent = text;
					meta.appendChild(line);
				});

				const media = document.createElement("div");
				media.className = "profile-media";
				const img = document.createElement("img");
				img.src = person.imageUrl || "NotThere.png";
				img.alt = `${fullName} profile`;
				img.loading = "lazy";
				img.addEventListener("error", () => {
					if (!img.src.endsWith("NotThere.png")) {
						img.src = "NotThere.png";
					}
				});
				media.appendChild(img);

				const description = document.createElement("p");
				description.className = "profile-description";
				description.textContent =
					person.description || "Description not available. Sorry! :(";

				const actions = document.createElement("div");
				actions.className = "profile-actions";
				if (person.wikiUrl) {
					const wiki = document.createElement("a");
					wiki.className = "wiki-button";
					wiki.href = person.wikiUrl;
					wiki.target = "_blank";
					wiki.rel = "noopener";
					wiki.textContent = "Wiki";
					actions.appendChild(wiki);
				} else {
					const wiki = document.createElement("span");
					wiki.className = "wiki-button disabled";
					wiki.textContent = "Wiki not avalible, sorry! :(";
					wiki.setAttribute("aria-disabled", "true");
					actions.appendChild(wiki);
				}

				card.appendChild(title);
				card.appendChild(meta);
				card.appendChild(media);
				card.appendChild(description);
				if (person.warning && person.warning.trim() !== "") {
					const warning = document.createElement("div");
					warning.className = "profile-warning";
					const warningTitle = document.createElement("h4");
					warningTitle.textContent = "Warning!";
					const warningText = document.createElement("p");
					warningText.textContent = person.warning;
					warning.appendChild(warningTitle);
					warning.appendChild(warningText);
					card.appendChild(warning);
				}
				card.appendChild(actions);

				track.appendChild(card);
			});

			const cards = Array.from(track.children);
			let index = 0;

			const updateCarousel = () => {
				track.style.transform = `translateX(-${index * 100}%)`;
				if (counter) {
					counter.textContent = `${index + 1} of ${cards.length}`;
				}
			};

			const goTo = (nextIndex) => {
				if (cards.length === 0) {
					return;
				}
				index = (nextIndex + cards.length) % cards.length;
				updateCarousel();
			};

			if (prevBtn) {
				prevBtn.addEventListener("click", () => {
					goTo(index - 1);
				});
			}
			if (nextBtn) {
				nextBtn.addEventListener("click", () => {
					goTo(index + 1);
				});
			}

			updateCarousel();
			bindZoomableImages(track);
		}
	}
});

