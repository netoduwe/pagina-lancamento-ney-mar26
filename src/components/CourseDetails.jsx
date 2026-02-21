import React from 'react';
import { Clock, Calendar, Video, MonitorPlay, BookOpen, GraduationCap, Users } from 'lucide-react';
import logoAnhanguera from '../assets/logo-anhanguera.svg';
import logoPosNa from '../assets/logo-header-pos-na.svg';
import logoMec from '../assets/logo-mec-1-150x150.png';

const CourseDetails = () => {
    return (
        <section className="section-padding fade-in-section bg-dark text-white" style={{ position: 'relative' }}>
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <h2 className="font-serif" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem', color: 'var(--text-primary)' }}>
                    Como vai funcionar a Pós-Graduação Nutrição Avançada?
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '1rem',
                    marginBottom: '1rem'
                }}>
                    {/* Top Row: 4 Small Cards */}
                    <div className="glass-panel detail-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(15, 23, 42, 0.4)' }}>
                        <Clock size={24} color="var(--gold-mid)" />
                        <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>Duração: 12 meses</span>
                    </div>
                    <div className="glass-panel detail-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(15, 23, 42, 0.4)' }}>
                        <Calendar size={24} color="var(--gold-mid)" />
                        <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>Início das aulas: Nova turma iniciando agora</span>
                    </div>
                    <div className="glass-panel detail-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(15, 23, 42, 0.4)' }}>
                        <MonitorPlay size={24} color="var(--gold-mid)" />
                        <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>Carga horária: 420h</span>
                    </div>
                    <div className="glass-panel detail-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(15, 23, 42, 0.4)' }}>
                        <BookOpen size={24} color="var(--gold-mid)" />
                        <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>Sem TCC obrigatório</span>
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                    marginBottom: '1rem'
                }}>
                    {/* Middle Row: 2 Big Cards and 2 Medium Cards */}
                    {/* Left Column -> 1 Big Card */}
                    <div className=" стекло-panel detail-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(15, 23, 42, 0.4)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                            <Video size={28} color="var(--gold-mid)" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 600 }}>Modalidade: 100% online (aulas gravadas de até 40 minutos)</h4>
                                <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem' }}>
                                    <li>Mentoria ao vivo Ney Felipe 1x por mês</li>
                                    <li>Grupo de Estudos Nutrição Avançada 1x por mês</li>
                                    <li>Encontros ao vivo exclusivo da Pós 1x por mês</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Column -> 2 Medium Cards Stacked */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div className="glass-panel detail-card" style={{ padding: '1.8rem 2rem', display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(15, 23, 42, 0.4)', height: '100%' }}>
                            <GraduationCap size={28} color="var(--gold-mid)" />
                            <span style={{ fontSize: '1rem', fontWeight: 500 }}>Certificação reconhecida pelo MEC</span>
                        </div>
                        <div className="glass-panel detail-card" style={{ padding: '1.8rem 2rem', display: 'flex', alignItems: 'flex-start', gap: '1rem', background: 'rgba(15, 23, 42, 0.4)', height: '100%' }}>
                            <BookOpen size={28} color="var(--gold-mid)" style={{ flexShrink: 0 }} />
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>12 disciplinas, sendo liberadas 1 por mês, com acesso a todo o conteúdo por 2 anos</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Full width card */}
                <div className="glass-panel detail-card" style={{ padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', background: 'rgba(15, 23, 42, 0.4)', marginBottom: '3rem' }}>
                    <Users size={28} color="var(--gold-mid)" />
                    <span style={{ fontSize: '1rem', fontWeight: 500, textAlign: 'center' }}>
                        Monitora <strong style={{ color: 'var(--text-primary)' }}>Especialista</strong> (Nutri que atende na vida real e tem mestrado) para tirar dúvidas + Grupo de alunos
                    </span>
                </div>

                {/* Logos Footer Box */}
                <div style={{
                    border: '1px solid rgba(214, 179, 96, 0.3)',
                    borderRadius: '12px',
                    padding: '2rem 3rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    background: 'rgba(255, 255, 255, 0.01)'
                }}>
                    <img src={logoPosNa} alt="Pós Graduação Nutrição Avançada" style={{ height: '50px', objectFit: 'contain' }} />
                    <img src={logoAnhanguera} alt="Anhanguera" style={{ height: '35px', objectFit: 'contain' }} />
                    <img src={logoMec} alt="MEC" style={{ height: '70px', objectFit: 'contain', filter: 'drop-shadow(0 0 10px rgba(214, 179, 96, 0.2))' }} />
                </div>
            </div>

            <style>{`
                .detail-card {
                    transition: transform 0.3s ease, background 0.3s ease;
                }
                .detail-card:hover {
                    transform: translateY(-2px);
                    background: rgba(30, 41, 59, 0.6) !important;
                }
                @media (max-width: 768px) {
                    .container > div {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default CourseDetails;
