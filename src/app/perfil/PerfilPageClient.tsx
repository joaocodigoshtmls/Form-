'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Main from '@/components/Main'
import Breadcrumbs from '@/components/Breadcrumbs'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { useAuth } from '@/contexts/AuthContext'
import { rotaContato, rotaPacote } from '@/lib/links'
import { Mail, Hash, UserCircle2, ShieldCheck, Compass, LogOut } from 'lucide-react'

export default function PerfilPageClient() {
  const { user, loading, logout } = useAuth()

  const firstName = user?.name?.split(' ')[0] ?? 'viajante'

  return (
    <>
      <Header />
      <Main>
        <section className="section" aria-labelledby="perfil-title">
          <div className="container-wide space-y-8">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Perfil' }]} />

            {loading ? (
              <div className="space-y-6" aria-live="polite" aria-busy>
                <div className="h-44 rounded-3xl bg-slate-200/70 animate-pulse" />
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                  <div className="h-64 rounded-2xl bg-slate-200/70 animate-pulse lg:col-span-2" />
                  <div className="h-64 rounded-2xl bg-slate-200/70 animate-pulse" />
                </div>
              </div>
            ) : !user ? (
              <Card border className="max-w-xl">
                <h1 id="perfil-title" className="mb-3 text-3xl font-bold text-slate-900">
                  Faça login para acessar o perfil
                </h1>
                <p className="mb-6 text-slate-600">
                  Você precisa estar autenticado para visualizar seus dados. Clique no botão abaixo para acessar sua
                  conta e continuar navegando.
                </p>
                <Link
                  href="/login"
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 px-5 py-2.5 font-semibold text-white shadow-lg transition-all duration-200 hover:from-primary-500 hover:to-accent-500"
                >
                  Acessar área de login
                </Link>
              </Card>
            ) : (
              <>
                <div className="rounded-3xl bg-gradient-to-br from-primary-600 via-primary-500 to-accent-600 p-8 text-white shadow-hard">
                  <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] text-white/70">Área do viajante</p>
                      <h1 id="perfil-title" className="mt-3 text-4xl font-bold text-white">
                        Olá, {firstName}!
                      </h1>
                      <p className="mt-3 max-w-2xl text-base text-white/85">
                        Aqui você encontra suas informações cadastradas e os próximos passos para planejar uma viagem de
                        formatura inesquecível.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={rotaPacote()}
                        className="focus-ring inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-md backdrop-blur hover:bg-white/20"
                      >
                        <Compass size={16} />
                        Explorar pacotes
                      </Link>
                      <Link
                        href={rotaContato}
                        className="focus-ring inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-md backdrop-blur hover:bg-white/20"
                      >
                        <Mail size={16} />
                        Falar com suporte
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                  <Card border className="lg:col-span-2 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                        <UserCircle2 size={26} />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-slate-900">Dados pessoais</h2>
                        <p className="text-sm text-slate-500">Informações principais vinculadas à sua conta.</p>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                          <UserCircle2 size={20} />
                        </div>
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Nome completo</p>
                          <p className="mt-1 text-base font-semibold text-slate-900">{user.name}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                          <Mail size={20} />
                        </div>
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Email cadastrado</p>
                          <p className="mt-1 text-base font-semibold text-slate-900">{user.email}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:col-span-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                          <Hash size={20} />
                        </div>
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">ID da conta</p>
                          <p className="mt-1 text-base font-semibold text-slate-900 break-all">{user.id}</p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card border className="space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                        <ShieldCheck size={24} />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-slate-900">Sessão e segurança</h2>
                        <p className="text-sm text-slate-500">Gerencie o acesso e finalize sua sessão quando quiser.</p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 text-sm text-slate-600">
                      Mantenha seus dados atualizados para receber ofertas personalizadas e garantir uma experiência
                      tranquila durante toda a viagem de formatura.
                    </div>

                    <Button
                      variant="danger"
                      size="md"
                      className="w-full"
                      onClick={logout}
                    >
                      <LogOut size={18} />
                      Sair da conta
                    </Button>
                  </Card>
                </div>
              </>
            )}
          </div>
        </section>
      </Main>
      <Footer />
    </>
  )
}
