export default function Home() {
  return (
    <>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="沐爪宠物洗护中心">
          <span className="brand-mark">爪</span>
          <span>
            <strong>沐爪宠物洗护</strong>
            <small>Pet Grooming Studio</small>
          </span>
        </a>
        <nav className="nav">
          <a href="#services">服务</a>
          <a href="#packages">套餐</a>
          <a href="#process">流程</a>
          <a href="#contact">预约</a>
        </nav>
        <a className="button button-primary" href="#contact">
          立即预约
        </a>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">宠物洗护 · 干净、安静、放心</p>
            <h1>给毛孩子一套更舒适的洗护体验</h1>
            <p className="lead">
              提供洗澡、吹干、梳理、开结、耳眼护理与基础造型，适合日常清洁和定期养护。全流程分区操作，尽量降低紧张感。
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                预约时间
              </a>
              <a className="button button-secondary" href="#services">
                查看服务
              </a>
            </div>
            <div className="hero-metrics" aria-label="门店信息">
              <div>
                <strong>5 年</strong>
                <span>洗护经验</span>
              </div>
              <div>
                <strong>3 分区</strong>
                <span>洁净流程</span>
              </div>
              <div>
                <strong>20min</strong>
                <span>平均接待</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <img src="/assets/hero.svg" alt="宠物洗护场景插画" />
            <div className="floating-card floating-left">
              <span>今日可约</span>
              <strong>09:30 - 19:00</strong>
            </div>
            <div className="floating-card floating-right">
              <span>热门项目</span>
              <strong>深层去浮毛</strong>
            </div>
          </div>
        </section>

        <section className="band intro-strip">
          <div>
            <strong>专注猫狗洗护</strong>
            <p>从洗净、护理到吹干造型，一站完成。</p>
          </div>
          <div>
            <strong>低压力流程</strong>
            <p>尽量减少噪音和等待时间，照顾敏感宠物。</p>
          </div>
          <div>
            <strong>可预约到店</strong>
            <p>按体型和项目安排时段，避免高峰拥挤。</p>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-head">
            <p className="eyebrow">服务内容</p>
            <h2>按需选择，组合更灵活</h2>
          </div>
          <div className="grid services-grid">
            <article className="card service-card">
              <h3>基础洗护</h3>
              <p>
                涵盖温水冲洗、低刺激洗护、全身吹干、顺毛梳理、耳廓清洁、脚底修整与基础卫生整理，适合日常维持清洁状态。
              </p>
            </article>
            <article className="card service-card">
              <h3>深层清洁</h3>
              <p>
                针对换毛季和毛量较多的宠物，重点去除浮毛、松散毛团和表层灰尘，帮助减少掉毛堆积并让毛发更蓬松顺滑。
              </p>
            </article>
            <article className="card service-card">
              <h3>开结养护</h3>
              <p>
                对局部打结、毛层纠缠或结块区域进行分段处理，尽量降低拉扯感与不适，优先保护皮肤和毛根状态。
              </p>
            </article>
            <article className="card service-card">
              <h3>造型修剪</h3>
              <p>
                围绕脸部、眼周、脚部、臀部等易脏区域进行细致修整，让整体轮廓更整洁利落，也更便于后续日常护理。
              </p>
            </article>
          </div>
        </section>

        <section id="process" className="section section-alt">
          <div className="section-head">
            <p className="eyebrow">到店流程</p>
            <h2>三步完成，不用来回折腾</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <span>01</span>
              <div>
                <h3>登记与检查</h3>
                <p>确认体型、毛量、皮肤状态和适合项目。</p>
              </div>
            </div>
            <div className="timeline-item">
              <span>02</span>
              <div>
                <h3>洗护与护理</h3>
                <p>分区清洁、吹干、梳毛、护理同步完成。</p>
              </div>
            </div>
            <div className="timeline-item">
              <span>03</span>
              <div>
                <h3>整理与交接</h3>
                <p>检查毛发状态和皮肤细节后再交还主人。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="packages" className="section">
          <div className="section-head">
            <p className="eyebrow">推荐套餐</p>
            <h2>把常见需求做成清晰选择</h2>
          </div>
          <div className="grid package-grid">
            <article className="card package-card">
              <h3>日常清洁</h3>
              <p className="price">¥99 起</p>
              <ul>
                <li>基础洗澡</li>
                <li>吹干梳理</li>
                <li>耳眼清洁</li>
              </ul>
            </article>
            <article className="card package-card featured">
              <p className="badge">最受欢迎</p>
              <h3>毛发养护</h3>
              <p className="price">¥159 起</p>
              <ul>
                <li>基础洗护</li>
                <li>去浮毛与开结</li>
                <li>脚底与臀部修整</li>
              </ul>
            </article>
            <article className="card package-card">
              <h3>精致造型</h3>
              <p className="price">¥219 起</p>
              <ul>
                <li>深层洗护</li>
                <li>造型修剪</li>
                <li>护理建议</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section section-alt">
          <div className="section-head">
            <p className="eyebrow">用户反馈</p>
            <h2>看得见的整洁，也看得见的安心</h2>
          </div>
          <div className="grid review-grid">
            <article className="card review-card">
              <p>“洗完以后毛顺了很多，店员也很耐心。”</p>
              <strong>柚子妈妈</strong>
            </article>
            <article className="card review-card">
              <p>“第一次来，流程清楚，等待也不久。”</p>
              <strong>豆包主人</strong>
            </article>
            <article className="card review-card">
              <p>“开结处理得很细，回家摸起来很柔顺。”</p>
              <strong>阿布家</strong>
            </article>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-copy">
            <p className="eyebrow">预约咨询</p>
            <h2>发一个时间，我们帮你安排</h2>
            <p>支持猫狗洗护预约。填写基本信息后可直接联系门店确认时段和项目。</p>
            <div className="contact-meta">
              <div>
                <span>营业时间</span>
                <strong>09:00 - 20:00</strong>
              </div>
              <div>
                <span>联系电话</span>
                <strong>400-800-1234</strong>
              </div>
              <div>
                <span>门店地址</span>
                <strong>可替换为你的城市地址</strong>
              </div>
            </div>
          </div>

          <form className="card contact-form">
            <label>
              <span>主人姓名</span>
              <input type="text" placeholder="请输入姓名" />
            </label>
            <label>
              <span>宠物昵称</span>
              <input type="text" placeholder="比如：小白" />
            </label>
            <label>
              <span>预约项目</span>
              <select defaultValue="基础洗护">
                <option>基础洗护</option>
                <option>深层清洁</option>
                <option>开结养护</option>
                <option>造型修剪</option>
              </select>
            </label>
            <label>
              <span>预约时间</span>
              <input type="date" />
            </label>
            <label className="full">
              <span>补充说明</span>
              <textarea rows={4} placeholder="例如：体型、毛量、敏感部位或其他需要注意的事项" />
            </label>
            <button className="button button-primary full" type="submit">
              提交预约
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>沐爪宠物洗护中心</p>
        <p>为猫狗提供舒适、干净、有秩序的洗护服务。</p>
      </footer>
    </>
  );
}
