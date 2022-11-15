using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace razor_pages.Pages;

public class RoomModel : PageModel
{
    private readonly ILogger<RoomModel> _logger;

    public RoomModel(ILogger<RoomModel> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {
    }
}

