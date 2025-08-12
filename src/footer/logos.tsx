import Container from '@mui/material/Container';

export default function Logos() {
    return(
        <div className="logos">
            <div>
                <h2
                style={{
                    textAlign: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',    
                    marginBottom: '3rem',
                    fontWeight: '700', 
                    fontSize: '37.12px',
                    //width: 1520,
                }}
                >Trusted by 600+ paid customers in 40+ countries</h2>
            </div>
            
            <Container className='logos-container'
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '1.5rem',
                    alignItems: 'center',
                }}
            >
                <div>
                    <img
                    src="./images/ChristianDior.png" alt="Logos" />
                </div>
                <div>
                    <img src="./images/thales.png" alt="Logos" />
                </div>
                <div>
                    <img src="./images/Younited.png" alt="Logos" />
                </div>
                <div>
                    <img src="./images/danfoss.png" alt="Logos" />
                </div>
                <div>
                    <img src="./images/CMACGM.png" alt="Logos" />
                </div>
                <div>
                    <img src="./images/illumina.png" alt="Logos" />
                </div>
                <div>
                    <img src="./images/kpark.png" alt="Logos" />
                </div>
                <div>
                    <img src="./images/scalingo.png" alt="Logos" />
                </div>
            </Container>

            <Container className='logos-container'
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '1.5rem',
                    alignItems: 'center',
                }}
            >
                <div>
                    <img src="./images/ministere.png" alt="Logos" />
                </div>
                <div>
                    <img src="./images/BMW.png" alt="Logos" />
                </div>
                <div>
                    <img src="./images/telus.png" alt="Logos" />
                </div>
                <div>
                    <img src="./images/BestSeller.png" alt="Logos" />
                </div>
                <div>
                    <img src="./images/flagship-bio.png" alt="Logos" />
                </div>
                <div>
                    <img src="./images/insly.png" alt="Logos" />
                </div>
                <div>
                    <img src="./images/ninox.png" alt="Logos" />
                </div>
                <div>
                    <img src="./images/sodexo.png" alt="Logos" />
                </div>
            </Container>

            <div>
                <svg viewBox="0 0 1425 158" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
                <g clip-path="url(#clip0_13_186)">
                <path d="M0 86.3751L34.0417 83.5252C68.0833 80.5168 136.167 74.8168 203.933 65.4751C271.858 56.2918 339.308 43.6251 407.233 44.8918C475 46.3168 543.083 61.5168 610.85 72.1251C678.775 82.7335 746.225 88.4335 814.15 87.1668C881.917 85.9001 950 77.3501 1017.77 68.9585C1085.69 60.5668 1153.14 52.0168 1221.07 51.8585C1288.83 51.5418 1356.92 59.4585 1390.96 63.4168L1425 67.3751V160.792H1390.96C1356.92 160.792 1288.83 160.792 1221.07 160.792C1153.14 160.792 1085.69 160.792 1017.77 160.792C950 160.792 881.917 160.792 814.15 160.792C746.225 160.792 678.775 160.792 610.85 160.792C543.083 160.792 475 160.792 407.233 160.792C339.308 160.792 271.858 160.792 203.933 160.792C136.167 160.792 68.0833 160.792 34.0417 160.792H0V86.3751Z" fill="#054EAF"/>
                <path d="M0 116.458L34.0417 112.5C68.0833 108.542 136.167 100.625 203.933 94.2915C271.858 87.9582 339.308 83.2082 407.233 79.2499C475 75.2915 543.083 72.1248 610.85 71.8082C678.775 71.6498 746.225 74.1832 814.15 82.4165C881.917 90.6499 950 104.267 1017.77 104.108C1085.69 103.792 1153.14 89.5415 1221.07 83.6832C1288.83 77.9832 1356.92 80.5166 1390.96 81.9416L1425 83.2082V160.792H1390.96C1356.92 160.792 1288.83 160.792 1221.07 160.792C1153.14 160.792 1085.69 160.792 1017.77 160.792C950 160.792 881.917 160.792 814.15 160.792C746.225 160.792 678.775 160.792 610.85 160.792C543.083 160.792 475 160.792 407.233 160.792C339.308 160.792 271.858 160.792 203.933 160.792C136.167 160.792 68.0833 160.792 34.0417 160.792H0V116.458Z" fill="#032450"/>
                </g>
                <defs>
                <clipPath id="clip0_13_186">
                <rect width="1425" height="160.75" transform="translate(0 0.875)"/>
                </clipPath>
                </defs>
                </svg>
            </div>
        </div>
    )
}