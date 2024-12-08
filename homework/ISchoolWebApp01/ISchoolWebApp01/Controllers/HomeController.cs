using System.Diagnostics;
using System.Dynamic;
using ISchoolWebApp01.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace ISchoolWebApp01.Controllers
{
    public class DataRetrieval
    {
        private readonly HttpClient _httpClient;
        private const string BaseUrl = "https://ischool.gccis.rit.edu/api/";

        public DataRetrieval()
        {
            _httpClient = new HttpClient();
        }

        public async Task<string> GetData(string url)
        {
            try
            {
                string fullUrl = BaseUrl + url;
                HttpResponseMessage response = await _httpClient.GetAsync(fullUrl);
                return await response.Content.ReadAsStringAsync();
            }
            catch (Exception ex)
            {
                // More detailed error logging
                throw new Exception($"Error retrieving data from {url}: {ex.Message}", ex);
            }
        }
    }

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

        public async Task<IActionResult> About()
        {
            DataRetrieval dataR = new DataRetrieval();
            var loadedPep = await dataR.GetData("about/");
            var jsonResult = JsonConvert.DeserializeObject<About>(loadedPep);
            return View(jsonResult);
        }

        public async Task<IActionResult> People()
        {
            DataRetrieval dataR = new DataRetrieval();
            var loadedPep = await dataR.GetData("people/");
            var jsonResult = JsonConvert.DeserializeObject<PeopleModel>(loadedPep);
            //Add page title
            jsonResult.pageTitle = "Our People";
                
            return View(jsonResult);
        }

        public async Task<IActionResult> DynTest()
        {
            DataRetrieval dataR = new DataRetrieval();
            var loadedAbout = await dataR.GetData("about/");
            var rtnResults = JsonConvert.DeserializeObject<About>(loadedAbout);

            var loadedCourse = await dataR.GetData("course/courseID=ISTE-340");
            var courseRtnResults = JsonConvert.DeserializeObject<Course>(loadedCourse);

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
