freq = 1; //oscillations per second 
amplitude = 80; //amplitude peak value
decay = 0; //no decay

amplitude*Math.sin(freq*time*2*Math.PI)/Math.exp(decay*time);
