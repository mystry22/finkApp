axios.post('http://localhost:5000/api/mobile/mobileRegister', ).
                            then(res => {
                                setIsLoading(false);
                                if (res.data == 'Not registered') {
                                    alert('Sorry we are unable to process your request at the moment');

                                } else {
                                    setIsLoading(false);
                                    console.log(res.data);
                                    navigation.navigate('Home');

                                    AsyncStorage.setItem('user', res.data);
                                        
                                        setToken(res.data);
                                        navigation.navigate('Home');
                                    

                                }

                            }).catch(err => console.log(err));
