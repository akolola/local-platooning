close all;
[scenario, truck0, truck1, truck2] = scenario2 (); 
chasePlot (truck0, 'Centerline', 'on') 
plot (scenario)

while advance (scenario)
 pause (0.001) 
end