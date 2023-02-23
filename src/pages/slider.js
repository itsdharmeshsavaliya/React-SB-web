import $ from 'jquery';


            $(document).ready(function () {
                            $('.trusted-slider').owlCarousel({
                            loop: true,
                            nav: false,
                            dots: false,
                            autoplay: true,
                            responsive: {
                                0: {
                                    items: 2
                                },
                                512: {
                                    items: 3
                                },
                                768: {
                                    items: 4
                                },
                                1000: {
                                    items: 5
                                }
                            }
                        }); 
                    
                        $('.testimonials-slider').owlCarousel({
                        loop: true,
                        nav: true,
                        dots: true,
                        autoplay: false,
                        margin: 12,
                        navText: ['<i class="sprite prev-icon v-m"></i>', '<i class="sprite next-icon v-m"></i>'],
                        responsive: {
                            0: {
                                items: 1
                            },
                            600: {
                                nav: true,
                                items: 2
                            },
                            1024: {
                                nav: true,
                                items: 3
                            },
                            1025: {
                                items: 3
                            }
                        }
                    });

                $('.awards_logo').owlCarousel({
                    loop: true,
                    nav: false,
                    dots: false,
                    autoplay: true,
                    responsive: {
                        0: {
                            items: 2
                        },
                        512: {
                            items: 3
                        },
                        768: {
                            items: 4
                        },
                        1000: {
                            items: 5
                        }
                    }
                });
                
                $('.home-slider').owlCarousel({
                    loop: true,
                    nav: false,
                    dots: true,
                    autoplay: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 1
                        },
                        1000: {
                            items: 1
                        }
                    }
                });
            });
          