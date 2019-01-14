[scenario, truck0, truck1, truck2] = scenario2 (); 
chasePlot (truck2, 'Centerline', 'on', 'ViewHeight', 15, 'ViewPitch', 15)
writer = VideoWriter ('platoon.avi'); 
open (writer) 
% plot (scenario) 
% f = gcf; 
% f.position = get (0, 'MonitorPosition'); 
ax = gca;

while advance (scenario)
 pause (0.001)
 fr = getframe (ax);
 IM = fr.cdata;
 IM = imresize (IM, [640 480]);
 writeVideo (writer, IM) 
end 
close (writer);