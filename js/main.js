$(document).ready(function(){$("a.scrollto").click(function(){var o="#"+$(this).attr("href").split("#")[1],t=$(o).offset().top;return jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop:t},900),!1}),$(function(){$(window).scrollTop()>="350"&&$("#ToTop").fadeIn("slow"),$(window).scroll(function(){$(window).scrollTop()<="350"?$("#ToTop").fadeOut("slow"):$("#ToTop").fadeIn("slow")}),$(window).scrollTop()<=$(document).height()-"999"&&$("#OnBottom").fadeIn("slow"),$(window).scroll(function(){$(window).scrollTop()>=$(document).height()-"999"?$("#OnBottom").fadeOut("slow"):$("#OnBottom").fadeIn("slow")}),$("#ToTop").click(function(){$("html,body").animate({scrollTop:0},"slow")}),$("#OnBottom").click(function(){$("html,body").animate({scrollTop:$(document).height()},"slow")})})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjbGljayIsImVsZW1lbnRDbGljayIsInRoaXMiLCJhdHRyIiwic3BsaXQiLCJkZXN0aW5hdGlvbiIsIm9mZnNldCIsInRvcCIsImpRdWVyeSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ3aW5kb3ciLCJmYWRlSW4iLCJzY3JvbGwiLCJmYWRlT3V0IiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiQUFDQUEsRUFBRUMsVUFBVUMsTUFBTSxXQUlsQkYsRUFBRSxjQUFjRyxNQUFNLFdBQ2xCLEdBQUlDLEdBQWUsSUFBSUosRUFBRUssTUFBTUMsS0FBSyxRQUFRQyxNQUFNLEtBQUssR0FDbkRDLEVBQWNSLEVBQUVJLEdBQWNLLFNBQVNDLEdBRTNDLE9BREFDLFFBQU8sMkNBQTJDQyxTQUFTQyxVQUFXTCxHQUFjLE1BQzdFLElBUVhSLEVBQUUsV0FDR0EsRUFBRWMsUUFBUUQsYUFBYSxPQUFPYixFQUFFLFVBQVVlLE9BQU8sUUFDckRmLEVBQUVjLFFBQVFFLE9BQU8sV0FDWmhCLEVBQUVjLFFBQVFELGFBQWEsTUFBT2IsRUFBRSxVQUFVaUIsUUFBUSxRQUNqRGpCLEVBQUUsVUFBVWUsT0FBTyxVQUdyQmYsRUFBRWMsUUFBUUQsYUFBYWIsRUFBRUMsVUFBVWlCLFNBQVMsT0FBT2xCLEVBQUUsYUFBYWUsT0FBTyxRQUM3RWYsRUFBRWMsUUFBUUUsT0FBTyxXQUNaaEIsRUFBRWMsUUFBUUQsYUFBYWIsRUFBRUMsVUFBVWlCLFNBQVMsTUFBT2xCLEVBQUUsYUFBYWlCLFFBQVEsUUFDekVqQixFQUFFLGFBQWFlLE9BQU8sVUFHNUJmLEVBQUUsVUFBVUcsTUFBTSxXQUFXSCxFQUFFLGFBQWFZLFNBQVNDLFVBQVUsR0FBRyxVQUNsRWIsRUFBRSxhQUFhRyxNQUFNLFdBQVdILEVBQUUsYUFBYVksU0FBU0MsVUFBVWIsRUFBRUMsVUFBVWlCLFVBQVUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuLy8g0J/QoNCe0JrQoNCj0KLQmtCQINCU0J4g0KHQldCa0KbQmNCYXHJcblxyXG4kKFwiYS5zY3JvbGx0b1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZWxlbWVudENsaWNrID0gJyMnKyQodGhpcykuYXR0cihcImhyZWZcIikuc3BsaXQoXCIjXCIpWzFdXHJcbiAgICB2YXIgZGVzdGluYXRpb24gPSAkKGVsZW1lbnRDbGljaykub2Zmc2V0KCkudG9wO1xyXG4gICAgalF1ZXJ5KFwiaHRtbDpub3QoOmFuaW1hdGVkKSxib2R5Om5vdCg6YW5pbWF0ZWQpXCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogZGVzdGluYXRpb259LCA5MDApO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59KTtcdFxyXG5cclxuXHJcblxyXG4vLyDQn9GA0L7QutGA0YPRgtC60LAg0LLQstC10YDRhSBcclxuXHJcbi8vPCFbQ0RBVEFbXHJcbiQoZnVuY3Rpb24oKXtcclxuIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCk+PVwiMzUwXCIpICQoXCIjVG9Ub3BcIikuZmFkZUluKFwic2xvd1wiKVxyXG4gJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG4gIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCk8PVwiMzUwXCIpICQoXCIjVG9Ub3BcIikuZmFkZU91dChcInNsb3dcIilcclxuICBlbHNlICQoXCIjVG9Ub3BcIikuZmFkZUluKFwic2xvd1wiKVxyXG4gfSk7XHJcblxyXG4gaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKTw9JChkb2N1bWVudCkuaGVpZ2h0KCktXCI5OTlcIikgJChcIiNPbkJvdHRvbVwiKS5mYWRlSW4oXCJzbG93XCIpXHJcbiAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcbiAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKT49JChkb2N1bWVudCkuaGVpZ2h0KCktXCI5OTlcIikgJChcIiNPbkJvdHRvbVwiKS5mYWRlT3V0KFwic2xvd1wiKVxyXG4gIGVsc2UgJChcIiNPbkJvdHRvbVwiKS5mYWRlSW4oXCJzbG93XCIpXHJcbiB9KTtcclxuXHJcbiAkKFwiI1RvVG9wXCIpLmNsaWNrKGZ1bmN0aW9uKCl7JChcImh0bWwsYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6MH0sXCJzbG93XCIpfSlcclxuICQoXCIjT25Cb3R0b21cIikuY2xpY2soZnVuY3Rpb24oKXskKFwiaHRtbCxib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDokKGRvY3VtZW50KS5oZWlnaHQoKX0sXCJzbG93XCIpfSlcclxufSk7XHJcbi8vXV0+XHJcblxyXG5cclxuXHJcblxyXG5cclxufSk7XHJcblxyXG5cclxuXHJcbiJdfQ==
