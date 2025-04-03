// src/components/EventDetails.tsx
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function EventDetails() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h3
          className="text-center font-serif text-3xl mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Event Details
        </motion.h3>
        
        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            className="text-center p-8 border border-gold rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="font-script text-gold text-3xl mb-4">Wedding</h4>
            <p className="mb-3">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              May 9, 2025
            </p>
            <p className="mb-3">
              <FontAwesomeIcon icon={faClock} className="mr-2" />
              5:15 AM - 6:15 AM
            </p>
            <p className="mb-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              <a 
                href="https://www.google.com/maps/place/Sri+Maha+Mariamman+Temple,+Taman+Sri+Andalas/@3.0125687,101.4540739,18z/data=!4m6!3m5!1s0x31cdad007bb4cf8d:0x7d702f4569667e47!8m2!3d3.0126571!4d101.4550824!16s%2Fg%2F11x1v_355c?entry=ttu&g_ep=EgoyMDI1MDMzMS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline text-blue-800"
              >
                Sri Maha Mariamman Temple</a><br />
                <br />
                21A,<br />
                Lengkongan Sri Mersing 25,<br />
                Kawasan 2, Taman Sri Andalas,<br />
                41200 Klang, Selangor
              
            </p>
          </motion.div>
          
          <motion.div
            className="text-center p-8 border border-gold rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="font-script text-gold text-3xl mb-4">Bride's Reception</h4>
            <p className="mb-3">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              May 10, 2025
            </p>
            <p className="mb-3">
              <FontAwesomeIcon icon={faClock} className="mr-2" />
              7:01 PM onwards
            </p>
            <p className="mb-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              <a 
                href="https://www.google.com/maps/place/Sunshine+Banquet+Hall/@3.028928,101.452092,17z/data=!3m1!4b1!4m6!3m5!1s0x31c5d1d9b9b9b9b9:0x9b9b9b9b9b9b9b9b!8m2!3d3.028928!4d101.4546669!16s%2Fg%2F11bw3yv0l5?entry=ttu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Sunshine Banquet Hall</a><br />
                <br />
                42,<br />
                Persiaran Bukit Raja 2,<br />
                Bandar Baru Klang,<br />
                41150 Klang, Selangor
              
            </p>
          </motion.div>

          <motion.div
            className="text-center p-8 border border-gold rounded-lg"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="font-script text-gold text-3xl mb-4">Groom's Reception</h4>
            <p className="mb-3">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              May 17, 2025
            </p>
            <p className="mb-3">
              <FontAwesomeIcon icon={faClock} className="mr-2" />
              7:01 PM onwards
            </p>
            <p className="mb-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              <a 
                href="https://www.google.com/maps/place/Kompleks+Pekan+Rabu/@2.0306,103.3186,17z/data=!3m1!4b1!4m6!3m5!1s0x31d1a3b3b3b3b3b3:0x9b9b9b9b9b9b9b9b!8m2!3d2.0306!4d103.3211749!16s%2Fg%2F11bw3yv0l5?entry=ttu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Kompleks Pekan Rabu</a><br />
                <br />
                Jln Haji Manan, <br />
                Kampung Masjid Lama,<br />
                86000 Kluang, Johor Darul Ta'zim
              
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}