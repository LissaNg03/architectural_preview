/** @format */

const localAPI = {
	navLinks: ["Home", "Designs", "Services", "About", "Contact"],
	designFilters: ["1-4 rooms", "4+ rooms", "mansions"],
	stats: [
		{ name: "Clients", number: "2.5K+" },
		{ name: "Followers", number: "100K+" },
		{ name: "Designs", number: "5K+" },
	],
	testimonials: [
		{
			name: "Lerato M.",
			role: "Homeowner",
			text: "Working with SM Architects was a dream. Their 3D visuals helped us see our home before it was built — and the result matched perfectly!",
			image: "/house_front_view.png",
		},
		{
			name: "Jason K.",
			role: "Real Estate Developer",
			text: "The team is fast, creative, and professional. Their walkthrough animations made it easy to sell off-plan units to investors.",
			image: "/house_front_view.png",
		},
		{
			name: "Amira S.",
			role: "Interior Designer",
			text: "Their attention to detail is unmatched. The renders looked like photographs, which made pitching my designs to clients effortless.",
			image: "/house_front_view.png",
		},
		{
			name: "Teboho D.",
			role: "Client",
			text: "From concept to construction, they handled everything smoothly. I couldn’t be happier with the final result — highly recommended!",
			image: "/house_front_view.png",
		},
	],
	hero_socialLinks: [
		{
			platform: "whatsapp",
			link: "https://wa.me/27763232757?text=Hi%20there,%20got%20this%20number%20from%20your%20website.",
		},
		{
			platform: "tiktok",
			link: "https://www.tiktok.com/@silinda_sm_architects",
		},
		{
			platform: "facebook",
			link: "https://www.facebook.com/SilindaSMhouseplanarchitecture",
		},
	],

	designs: [
		{
			name: "Spacious Villa #3",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2010,
				rooms: 3,
				bathRooms: 3,
				porch: true,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Eco-Friendly Smart Home #4",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2015,
				rooms: 4,
				bathRooms: 1,
				porch: false,
				balcony: true,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Modernist Cube Home #5",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
			],
			quotation: {
				fullSquareMeter: 2020,
				rooms: 5,
				bathRooms: 2,
				porch: true,
				balcony: false,
				garage: false,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Compact Smart Apartment #6",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2025,
				rooms: 6,
				bathRooms: 3,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Modernist Cube Home #7",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2030,
				rooms: 1,
				bathRooms: 1,
				porch: true,
				balcony: true,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Mediterranean Style House #8",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
			images: [
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2035,
				rooms: 2,
				bathRooms: 2,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Beachfront Bungalow #9",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2040,
				rooms: 3,
				bathRooms: 3,
				porch: true,
				balcony: false,
				garage: false,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Open Plan Penthouse #10",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2045,
				rooms: 4,
				bathRooms: 1,
				porch: false,
				balcony: true,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "6 Room Mansion #11",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2050,
				rooms: 5,
				bathRooms: 2,
				porch: true,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Rustic Farmhouse #12",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
			],
			quotation: {
				fullSquareMeter: 2055,
				rooms: 6,
				bathRooms: 3,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Rustic Farmhouse #13",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2060,
				rooms: 1,
				bathRooms: 1,
				porch: true,
				balcony: true,
				garage: false,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Elegant Townhouse #14",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2065,
				rooms: 2,
				bathRooms: 2,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Luxury Family Home #15",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
			images: [
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2070,
				rooms: 3,
				bathRooms: 3,
				porch: true,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Open Plan Penthouse #16",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2075,
				rooms: 4,
				bathRooms: 1,
				porch: false,
				balcony: true,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Coastal Holiday Home #17",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2080,
				rooms: 5,
				bathRooms: 2,
				porch: true,
				balcony: false,
				garage: false,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Luxury Family Home #18",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2085,
				rooms: 6,
				bathRooms: 3,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "6 Room Mansion #19",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
			],
			quotation: {
				fullSquareMeter: 2090,
				rooms: 1,
				bathRooms: 1,
				porch: true,
				balcony: true,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Elegant Townhouse #20",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2095,
				rooms: 2,
				bathRooms: 2,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Elegant Townhouse #21",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2100,
				rooms: 3,
				bathRooms: 3,
				porch: true,
				balcony: false,
				garage: false,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Compact Smart Apartment #22",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
			images: [
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2105,
				rooms: 4,
				bathRooms: 1,
				porch: false,
				balcony: true,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Luxury Family Home #23",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2110,
				rooms: 5,
				bathRooms: 2,
				porch: true,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Beachfront Bungalow #24",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2115,
				rooms: 6,
				bathRooms: 3,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Luxury Mountain Cabin #25",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2120,
				rooms: 1,
				bathRooms: 1,
				porch: true,
				balcony: true,
				garage: false,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "6 Room Mansion #26",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
			],
			quotation: {
				fullSquareMeter: 2125,
				rooms: 2,
				bathRooms: 2,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Grand Manor Estate #27",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2130,
				rooms: 3,
				bathRooms: 3,
				porch: true,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Eco-Friendly Smart Home #28",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2135,
				rooms: 4,
				bathRooms: 1,
				porch: false,
				balcony: true,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Art Deco Residence #29",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
			images: [
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2140,
				rooms: 5,
				bathRooms: 2,
				porch: true,
				balcony: false,
				garage: false,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Urban Loft Space #30",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2145,
				rooms: 6,
				bathRooms: 3,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Elegant Townhouse #31",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2150,
				rooms: 1,
				bathRooms: 1,
				porch: true,
				balcony: true,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Rustic Farmhouse #32",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2155,
				rooms: 2,
				bathRooms: 2,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Elegant Townhouse #33",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
			],
			quotation: {
				fullSquareMeter: 2160,
				rooms: 3,
				bathRooms: 3,
				porch: true,
				balcony: false,
				garage: false,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Coastal Holiday Home #34",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2165,
				rooms: 4,
				bathRooms: 1,
				porch: false,
				balcony: true,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "6 Room Mansion #35",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2170,
				rooms: 5,
				bathRooms: 2,
				porch: true,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Eco-Friendly Smart Home #36",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
			images: [
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2175,
				rooms: 6,
				bathRooms: 3,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "4 Rooms Modern Flat #37",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2180,
				rooms: 1,
				bathRooms: 1,
				porch: true,
				balcony: true,
				garage: false,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Eco-Friendly Smart Home #38",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2185,
				rooms: 2,
				bathRooms: 2,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Mediterranean Style House #39",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2190,
				rooms: 3,
				bathRooms: 3,
				porch: true,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Beachfront Bungalow #40",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
			],
			quotation: {
				fullSquareMeter: 2195,
				rooms: 4,
				bathRooms: 1,
				porch: false,
				balcony: true,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Spacious Villa #41",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2200,
				rooms: 5,
				bathRooms: 2,
				porch: true,
				balcony: false,
				garage: false,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Grand Manor Estate #42",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2205,
				rooms: 6,
				bathRooms: 3,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Minimalist Studio #43",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
			images: [
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2210,
				rooms: 1,
				bathRooms: 1,
				porch: true,
				balcony: true,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Spacious Villa #44",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2215,
				rooms: 2,
				bathRooms: 2,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Spacious Villa #45",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2220,
				rooms: 3,
				bathRooms: 3,
				porch: true,
				balcony: false,
				garage: false,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Spacious Villa #46",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2225,
				rooms: 4,
				bathRooms: 1,
				porch: false,
				balcony: true,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Coastal Holiday Home #47",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
			],
			quotation: {
				fullSquareMeter: 2230,
				rooms: 5,
				bathRooms: 2,
				porch: true,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Luxury Family Home #48",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2235,
				rooms: 6,
				bathRooms: 3,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "4 Rooms Modern Flat #49",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2240,
				rooms: 1,
				bathRooms: 1,
				porch: true,
				balcony: true,
				garage: false,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Classic Colonial Home #50",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
			images: [
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2245,
				rooms: 2,
				bathRooms: 2,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Eco-Friendly Smart Home #51",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2250,
				rooms: 3,
				bathRooms: 3,
				porch: true,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Urban Loft Space #52",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2255,
				rooms: 4,
				bathRooms: 1,
				porch: false,
				balcony: true,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Open Plan Penthouse #53",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2260,
				rooms: 5,
				bathRooms: 2,
				porch: true,
				balcony: false,
				garage: false,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Beachfront Bungalow #54",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
			],
			quotation: {
				fullSquareMeter: 2265,
				rooms: 6,
				bathRooms: 3,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Mediterranean Style House #55",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2270,
				rooms: 1,
				bathRooms: 1,
				porch: true,
				balcony: true,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Grand Manor Estate #56",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2275,
				rooms: 2,
				bathRooms: 2,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Minimalist Studio #57",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
			images: [
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2280,
				rooms: 3,
				bathRooms: 3,
				porch: true,
				balcony: false,
				garage: false,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Luxury Family Home #58",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2285,
				rooms: 4,
				bathRooms: 1,
				porch: false,
				balcony: true,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Minimalist Studio #59",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2290,
				rooms: 5,
				bathRooms: 2,
				porch: true,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Urban Loft Space #60",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2295,
				rooms: 6,
				bathRooms: 3,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "6 Room Mansion #61",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
			],
			quotation: {
				fullSquareMeter: 2300,
				rooms: 1,
				bathRooms: 1,
				porch: true,
				balcony: true,
				garage: false,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Urban Loft Space #62",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2305,
				rooms: 2,
				bathRooms: 2,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "4 Rooms Modern Flat #63",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2310,
				rooms: 3,
				bathRooms: 3,
				porch: true,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Spacious Villa #64",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
			images: [
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2315,
				rooms: 4,
				bathRooms: 1,
				porch: false,
				balcony: true,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Compact Smart Apartment #65",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2320,
				rooms: 5,
				bathRooms: 2,
				porch: true,
				balcony: false,
				garage: false,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Spacious Villa #66",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2325,
				rooms: 6,
				bathRooms: 3,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Compact Smart Apartment #67",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2330,
				rooms: 1,
				bathRooms: 1,
				porch: true,
				balcony: true,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Mediterranean Style House #68",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
			],
			quotation: {
				fullSquareMeter: 2335,
				rooms: 2,
				bathRooms: 2,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Elegant Townhouse #69",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2340,
				rooms: 3,
				bathRooms: 3,
				porch: true,
				balcony: false,
				garage: false,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Beachfront Bungalow #70",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2345,
				rooms: 4,
				bathRooms: 1,
				porch: false,
				balcony: true,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Luxury Mountain Cabin #71",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
			images: [
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2350,
				rooms: 5,
				bathRooms: 2,
				porch: true,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Coastal Holiday Home #72",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2355,
				rooms: 6,
				bathRooms: 3,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Luxury Family Home #73",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2360,
				rooms: 1,
				bathRooms: 1,
				porch: true,
				balcony: true,
				garage: false,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Rustic Farmhouse #74",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2365,
				rooms: 2,
				bathRooms: 2,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Classic Colonial Home #75",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
			],
			quotation: {
				fullSquareMeter: 2370,
				rooms: 3,
				bathRooms: 3,
				porch: true,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Modernist Cube Home #76",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2375,
				rooms: 4,
				bathRooms: 1,
				porch: false,
				balcony: true,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Luxury Family Home #77",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2380,
				rooms: 5,
				bathRooms: 2,
				porch: true,
				balcony: false,
				garage: false,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Countryside Retreat #78",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
			images: [
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2385,
				rooms: 6,
				bathRooms: 3,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Mediterranean Style House #79",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2390,
				rooms: 1,
				bathRooms: 1,
				porch: true,
				balcony: true,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Art Deco Residence #80",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2395,
				rooms: 2,
				bathRooms: 2,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Spacious Villa #81",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2400,
				rooms: 3,
				bathRooms: 3,
				porch: true,
				balcony: false,
				garage: false,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Modernist Cube Home #82",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
			],
			quotation: {
				fullSquareMeter: 2405,
				rooms: 4,
				bathRooms: 1,
				porch: false,
				balcony: true,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Elegant Townhouse #83",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2410,
				rooms: 5,
				bathRooms: 2,
				porch: true,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Mediterranean Style House #84",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2415,
				rooms: 6,
				bathRooms: 3,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Elegant Townhouse #85",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
			images: [
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2420,
				rooms: 1,
				bathRooms: 1,
				porch: true,
				balcony: true,
				garage: false,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Countryside Retreat #86",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2425,
				rooms: 2,
				bathRooms: 2,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Classic Colonial Home #87",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2430,
				rooms: 3,
				bathRooms: 3,
				porch: true,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Modernist Cube Home #88",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2435,
				rooms: 4,
				bathRooms: 1,
				porch: false,
				balcony: true,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Countryside Retreat #89",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
			],
			quotation: {
				fullSquareMeter: 2440,
				rooms: 5,
				bathRooms: 2,
				porch: true,
				balcony: false,
				garage: false,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Urban Loft Space #90",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2445,
				rooms: 6,
				bathRooms: 3,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Countryside Retreat #91",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2450,
				rooms: 1,
				bathRooms: 1,
				porch: true,
				balcony: true,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Open Plan Penthouse #92",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
			images: [
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2455,
				rooms: 2,
				bathRooms: 2,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Grand Manor Estate #93",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2460,
				rooms: 3,
				bathRooms: 3,
				porch: true,
				balcony: false,
				garage: false,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Mediterranean Style House #94",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2465,
				rooms: 4,
				bathRooms: 1,
				porch: false,
				balcony: true,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Open Plan Penthouse #95",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2470,
				rooms: 5,
				bathRooms: 2,
				porch: true,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Art Deco Residence #96",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "BACK VIEW",
					metres: "30m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
			],
			quotation: {
				fullSquareMeter: 2475,
				rooms: 6,
				bathRooms: 3,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Compact Smart Apartment #97",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790787/272b5a362a6ab40ae41caae5e9238b00_kenycs.webp",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "BACK VIEW",
					metres: "31m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2480,
				rooms: 1,
				bathRooms: 1,
				porch: true,
				balcony: true,
				garage: false,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Modernist Cube Home #98",
			category: "4+ rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852594/e310622f7855dc17a81232b9e1c33676_fw0gdt.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757790331/fb4baed194a09a7d883529ea96a94fdb_dfsplo.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "SIDE VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "BACK VIEW",
					metres: "32m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2485,
				rooms: 2,
				bathRooms: 2,
				porch: false,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Spacious Villa #99",
			category: "mansions",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852374/video_01_dsgtsc.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
			images: [
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851035/bg01_rgeq5j.jpg",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "BACK VIEW",
					metres: "33m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2490,
				rooms: 3,
				bathRooms: 3,
				porch: true,
				balcony: false,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
		{
			name: "Luxury Mountain Cabin #100",
			category: "1-4 rooms",
			video:
				"https://res.cloudinary.com/do8bgfqm0/video/upload/v1757852608/20247576240deba570a960d076915e4c_euqu3g.mp4",
			floorPlan: [
				{
					floor: "ground floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
				{
					floor: "second floor",
					image:
						"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/FloorPlan_wsbd8u.png",
				},
			],
			thumbnail:
				"https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
			images: [
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/931fba2ff96cd6f0ff91fa42288e19df_olaxrj.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851034/c5c9d46b7123c2b0bc3cb59dfcdaaa55_o8p6mi.webp",
				},
				{
					title: "SIDE VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851033/2863fb4a493858233f0d31025b811025_ck05cv.webp",
				},
				{
					title: "BACK VIEW",
					metres: "34m2",
					path: "https://res.cloudinary.com/do8bgfqm0/image/upload/v1757851031/8946a388bac58a934aa463bf660c49ef_eubecz.webp",
				},
			],
			quotation: {
				fullSquareMeter: 2495,
				rooms: 4,
				bathRooms: 1,
				porch: false,
				balcony: true,
				garage: true,
				description:
					"This beautiful property offers open spaces, natural lighting, modern finishes, and exceptional comfort for families or individuals seeking stylish living.",
			},
		},
	],
};
export default localAPI;
