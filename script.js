const scholarships=[

{
name:"First Graduate Scholarship (TNEA Govt. Quota)",
amount:"₹25000",
deadline:"30 Sept 2026"
},

{
name:"Post Matric Scholarship for SC/ST Students",
amount:"₹30000",
deadline:"15 Oct 2026"
},

{
name:"Post Matric Scholarship for BC and MBC Students",
amount:"₹20000",
deadline:"10 Oct 2026"
},

{
name:"Adi Dravidar Welfare Scholarship",
amount:"₹25000",
deadline:"25 Sept 2026"
},

{
name:"Tamil Nadu State Government Merit Scholarship",
amount:"₹20000",
deadline:"20 Sept 2026"
},

{
name:"Tamil Nadu Educational Scholarship for Orphan Students",
amount:"₹18000",
deadline:"30 Sept 2026"
},

{
name:"Scholarship for Differently Abled Students",
amount:"₹15000",
deadline:"15 Oct 2026"
},

{
name:"Tamil Nadu Government Scholarship for Minority Students",
amount:"₹18000",
deadline:"5 Oct 2026"
},

{
name:"Tamil Nadu Government Scholarship for Girl Students",
amount:"₹25000",
deadline:"30 Sept 2026"
},

{
name:"TVS Educational Trust Scholarship",
amount:"₹30000",
deadline:"12 Oct 2026"
}

]

function loadScholarships(){

const container=document.getElementById("scholarshipList")

scholarships.forEach(s=>{

container.innerHTML+=`

<div class="col-md-4">

<div class="card p-3 shadow-sm">

<h5>${s.name}</h5>

<p><b>Amount:</b> ${s.amount}</p>

<p><b>Deadline:</b> ${s.deadline}</p>

<a href="apply.html" class="btn btn-primary">Apply</a>

</div>

</div>

`

})

}