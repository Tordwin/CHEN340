using System.Diagnostics;
using ISchoolWebApp01.Models;
using Microsoft.AspNetCore.Mvc;

namespace ISchoolWebApp01.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            return View();
        }

        public async Task<IActionResult> People()
        {
            DataRetrieval dataR = new DataRetrieval();
            var loadedPep = await dataR.GetData("people/");
            var jasonResult = JsonConvert.DeserializedObject<PeopleModel>(loadedPep);
            //Add page title
            jasonResult.pageTitle = "Our People";

            return View(jsonResult);
        }

        public async Task<IActionResult> DynTest()
        {
            DataRetrieval dataR = new DataRetrieval();
            var loadedAbout = await dataR.GetData("about/");
            var rtnResults = JsonConvert.DeserializeObject<AboutModel>(loadedAbout);

            var loadedCourse = await dataR.GetData("course/courseID=ISTE-340");
            var courseRtnResults = JsonConvert.DeserializeObject<CourseModel>(loadedCourse);

            dynamic expando = new ExpandoObject();
            var comboModel = expando as IDictionary<string, object>;

            comboModel.Add("About", rtnResults);
            comboModel.Add("Course", courseRtnResults);
            comboModel.Add("pageTitle", "Test with a dynamic object");

            return View(comboModel);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
