const sampleProjects = [
  {
    title: "Village Water Supply System",
    type: "completed",
    location: "Rural Maharashtra",
    beforeImage: "/water-before.jpg",
    afterImage: "/water-after.jpg",
    description: "Installed clean water pipelines to 500+ homes.",
    impact: "Reduced waterborne diseases by 70%.",
    testimonial: {
      text: "No more walking miles for water.",
      author: "Mrs. Patil, Elder",
      rating: 5
    }
  },
  {
    title: "School Renovation Drive",
    type: "completed",
    location: "Odisha Tribal Area",
    beforeImage: "/school-before.jpg",
    afterImage: "/school-after.jpg",
    description: "Rebuilt broken classrooms and toilets.",
    impact: "Increased school attendance by 45%.",
    testimonial: {
      text: "Kids love coming to school now!",
      author: "Mr. Das, Teacher",
      rating: 4
    }
  },
  {
    title: "Solar Electrification Initiative",
    type: "ongoing",
    location: "Rajasthan Villages",
    beforeImage: "/solar-before.jpg",
    afterImage: "/solar-after.jpg",
    description: "Powering villages through solar panels.",
    progress: "65% done - 3 villages electrified",
    expectedImpact: "Reduce kerosene use, enable night classes.",
    testimonial: {
      text: "Studying after sunset is possible now!",
      author: "Mr. Singh, Head",
      rating: 5
    }
  },
  {
    title: "Women's Skill Development Center",
    type: "ongoing",
    location: "Uttar Pradesh",
    beforeImage: "/skill-before.jpg",
    afterImage: "/skill-after.jpg",
    description: "Vocational training for women.",
    progress: "Phase 1 done - 120 women trained",
    expectedImpact: "500+ trained yearly in tailoring, crafts.",
    testimonial: {
      text: "I now earn from my stitching!",
      author: "Ms. Khan",
      rating: 5
    }
  },
  {
    title: "Community Tree Plantation",
    type: "completed",
    location: "Alwar, Rajasthan",
    beforeImage: "/plantation-before.jpg",
    afterImage: "/plantation-after.jpg",
    description: "Planted 10,000+ trees.",
    impact: "Improved air quality and reduced heat.",
    testimonial: {
      text: "Our village is greener and cooler.",
      author: "Laxmi Devi",
      rating: 5
    }
  },
  {
    title: "Mobile Health Camps",
    type: "ongoing",
    location: "West Bengal",
    beforeImage: "/health-before.jpg",
    afterImage: "/health-after.jpg",
    description: "Regular health checkups for villagers.",
    progress: "Covered 8 of 20 villages",
    expectedImpact: "Better maternal health, early diagnosis.",
    testimonial: {
      text: "No need to travel far for checkups.",
      author: "Smt. Basanti",
      rating: 4
    }
  },
  {
    title: "Rainwater Harvesting Setup",
    type: "completed",
    location: "Tamil Nadu",
    beforeImage: "/rainwater-before.jpg",
    afterImage: "/rainwater-after.jpg",
    description: "Installed tanks and recharge pits.",
    impact: "Improved groundwater by 25%.",
    testimonial: {
      text: "Now we store every drop of rain.",
      author: "Mr. Raju",
      rating: 5
    }
  },
  {
    title: "Rural Library Project",
    type: "completed",
    location: "Madhya Pradesh",
    beforeImage: "/library-before.jpg",
    afterImage: "/library-after.jpg",
    description: "Set up digital libraries in rural schools.",
    impact: "Increased reading habits among youth.",
    testimonial: {
      text: "We can now read anytime!",
      author: "Sita, Class 8",
      rating: 4
    }
  },
  {
    title: "Sanitation Awareness Drive",
    type: "completed",
    location: "Chhattisgarh",
    beforeImage: "/toilet-before.jpg",
    afterImage: "/toilet-after.jpg",
    description: "Built toilets & taught hygiene.",
    impact: "Open defecation reduced by 80%.",
    testimonial: {
      text: "Our daughters feel safe now.",
      author: "Rajesh Patel",
      rating: 5
    }
  },
  {
    title: "Clean Cooking Energy Project",
    type: "ongoing",
    location: "Assam",
    beforeImage: "/cook-before.jpg",
    afterImage: "/cook-after.jpg",
    description: "Distributed smokeless stoves.",
    progress: "350 of 1000 households covered",
    expectedImpact: "Reduce respiratory illness in women.",
    testimonial: {
      text: "Cooking is safer and faster now.",
      author: "Nirmala Devi",
      rating: 4
    }
  },
  {
    title: "Digital Classroom Setup",
    type: "completed",
    location: "Jharkhand",
    beforeImage: "/class-before.jpg",
    afterImage: "/class-after.jpg",
    description: "Equipped schools with smart boards & tablets.",
    impact: "Learning retention improved by 50%.",
    testimonial: {
      text: "Studying is now fun with videos!",
      author: "Ravi, Student",
      rating: 5
    }
  },
  {
    title: "Local Market Development",
    type: "completed",
    location: "Himachal Pradesh",
    beforeImage: "/market-before.jpg",
    afterImage: "/market-after.jpg",
    description: "Revamped rural haats for local sellers.",
    impact: "Villagers now sell without middlemen.",
    testimonial: {
      text: "We get better prices for our goods!",
      author: "Shyam Lal, Farmer",
      rating: 4
    }
  },
  {
    title: "Child Nutrition Support Program",
    type: "ongoing",
    location: "Bihar",
    beforeImage: "/nutrition-before.jpg",
    afterImage: "/nutrition-after.jpg",
    description: "Daily meals to malnourished kids.",
    progress: "Running in 4 schools so far",
    expectedImpact: "Improve physical/mental growth.",
    testimonial: {
      text: "My son looks healthier than before.",
      author: "Poonam Devi",
      rating: 5
    }
  },
  {
    title: "Self-Help Group Startup Aid",
    type: "completed",
    location: "Nagaland",
    beforeImage: "/shg-before.jpg",
    afterImage: "/shg-after.jpg",
    description: "Provided funds to 20 SHGs.",
    impact: "Small businesses started by women.",
    testimonial: {
      text: "We now run our own micro-shops!",
      author: "SHG Member",
      rating: 5
    }
  },
  {
    title: "Water Tank Construction Project",
    type: "completed",
    location: "Rural Andhra",
    beforeImage: "/tank-before.jpg",
    afterImage: "/tank-after.jpg",
    description: "Built 4 overhead tanks.",
    impact: "Solved summer water crisis.",
    testimonial: {
      text: "Our taps don't run dry anymore!",
      author: "Village Committee",
      rating: 5
    }
  },
  {
    title: "Organic Farming Training",
    type: "ongoing",
    location: "Punjab",
    beforeImage: "/farm-before.jpg",
    afterImage: "/farm-after.jpg",
    description: "Workshops for 200+ farmers.",
    progress: "120 farmers trained so far",
    expectedImpact: "Reduce chemical usage, boost income.",
    testimonial: {
      text: "Now we export to cities too!",
      author: "Harpreet Singh",
      rating: 5
    }
  },
  {
    title: "Public Transport Van Initiative",
    type: "completed",
    location: "Rural Karnataka",
    beforeImage: "/van-before.jpg",
    afterImage: "/van-after.jpg",
    description: "Launched shared van services.",
    impact: "Connected 5 villages to nearby towns.",
    testimonial: {
      text: "No more waiting hours for a ride!",
      author: "Yashoda",
      rating: 4
    }
  },
  {
    title: "Anganwadi Upgradation Program",
    type: "completed",
    location: "Telangana",
    beforeImage: "/anganwadi-before.jpg",
    afterImage: "/anganwadi-after.jpg",
    description: "Upgraded 30+ Anganwadi centers.",
    impact: "Better care for infants & mothers.",
    testimonial: {
      text: "New toys, mats, fans — our kids love it!",
      author: "Anganwadi Worker",
      rating: 5
    }
  },
  {
    title: "Waste to Compost Program",
    type: "ongoing",
    location: "Goa",
    beforeImage: "/waste-before.jpg",
    afterImage: "/waste-after.jpg",
    description: "Training people to compost waste.",
    progress: "Running in 12 villages",
    expectedImpact: "Cleaner villages and free fertilizer.",
    testimonial: {
      text: "We no longer burn trash!",
      author: "Savio D’Costa",
      rating: 5
    }
  },
  {
    title: "Skill Uplift for Local Youth",
    type: "completed",
    location: "Kerala Hills",
    beforeImage: "/youth-before.jpg",
    afterImage: "/youth-after.jpg",
    description: "Conducted soft-skill & tech training.",
    impact: "80+ youth employed in urban sectors.",
    testimonial: {
      text: "I got an IT job after the course!",
      author: "Arun K.",
      rating: 5
    }
  }
];

export default sampleProjects;
