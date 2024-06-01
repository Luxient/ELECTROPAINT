document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navOverlay = document.querySelector('.nav-overlay');

    navToggle.addEventListener('click', () => {
        navOverlay.classList.toggle('nav-overlay_visible');
    });

    navOverlay.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            navOverlay.classList.remove('nav-overlay_visible');
        }
    });
});





// .hero {
//     background-image: url('https://lh3.googleusercontent.com/pw/AP1GczMepfJowUdvgmGkcT1o3VNYuSTcIP42H2JtSFiNeikUuL3KlEQ2CYMnHsXD6l66o5ZeT9KS0fvgH6xZMAGolAgkfa0xcswNF_JuSQZHemAiwlR9ABYlPU1wgFG47-a_ZMbALIFC-44CFNd881mxb8y9I3iK1oNTWi_-hmyFT4RvdyL0GnJxLJVdUpHAlWe2JhoZAWHfpmPsADFUaDsgejhuHUFsnJaWcb-nQleIJi-h2SFBC3qnbh4kKPTWTCSQ5ieRPrB3TqfLTRz8RHHGf5pJo1AN1JE6FDnvUDH7mKQCOzrqvpIPRz4WiLpuuUBlHTWmUTiQ56awk_IlfbhrWEYLyZJ8AhXZrNrNmOVWqORCmtVd5nK5nGj_mr2Q18COlmPTODxufeuHt6YS4vu8-Nj8XFBDO9M4f8p6u_dzC5JDBpmbwG5pH41FFU6DTaEAfALVLZmyOMM_y1iaHSfvNJSfR_YF2EVniow8R9cPg_0zvWi0WI6H-OzN0AvtFY9P0OQ4kIHYsK3ooyDt8NqqDAE2rBgwap0kms-A43NvEVqlmBq0_20GjqFQ3oEmzIkJH6q3iLkH4eHwjirXLfT4zQxCNaP0GVKajOfreujMr_x2RL7z8ameBC41Q8AuX1eQPv_S-4YRqjNsI4pY8Yz1izG4-BxlJFGZy2atix_lUwX0MVDprE4Q4FaRpWjPq-xyBJ4iAMQ-tsxHCk6suraA7Khd3M6cj0Fmh1vXaYYMCnMjxm3RkI3hPY9LxQzKYuf1SnSA8-_CXcbi5T-DvQHJ1ERHGmx8wB9YSy9XAm18uG1pbJ6InDLpEtE4qv2V2va6PbjI-7UUdl4HVt53judbHUjP55-YzS_SlpQXpU2f-2BnBFjGrqB9ZvjwWRjrcet5TJFiLAw7VIL58TmiZFsye-A8Wxbo8XgjuhFaMuYpu4t3d6hBQMjXyozuHk4Gm_3g6rVYPMaOtmv1X0XMkt5lUBVydSaiZfH6=w638-h638-s-no?authuser=0');
//     background-size: cover;
//     background-position: center;
//     color: white;
//     text-align: center;
//     padding: 150px 20px;
// }